

const Rental = require("../models/rental");

exports.getRentals = (req , res) => {
  
    Rental.find({}, (error , foundRentals) => {
      if(error){
        // return new Rental()
        // .sendError(res , {status : 422 ,detail : "Can not retrieve rental data !!" }) ;
        return res.mongoError(error) ;
      }
       return res.json(foundRentals) ;
    })
    }


exports.getRentalById = (req , res) => {

    const { rentalId } = req.params ;

     Rental.findById(rentalId , (error , foundRental) => {
      if(error){
        // return new Rental()
        // .sendError(res , {status : 422 ,detail : "Can not retrieve rental data !!" }) ;
        return res.mongoError(error) ;
      }
      return res.json(foundRental);
     })
    }
    

exports.createRental = ( req , res ) => {
    const rentalData = req.body ;
    const user = res.locals.user ;

    rentalData.owner = user ;
    
    const newRental = new Rental(rentalData) ;
    newRental.save((error, createdRental) => {
      if(error){
        // return new Rental()
        // .sendError(res , {status : 422 ,detail : "Can not post rental data !!" }) ;
        return res.mongoError(error) ;
      }
      return res.json({message : "Rental with id : " + createdRental._id + " was added ."});
    }) ;
   
  }
    

// exports.deleteRental = (req , res) => {

//     const { rentalId } = req.params ;
//     const rIndex =  rentals.findIndex(r => r._id === rentalId);
    
//     rentals.splice(rIndex ,1) ;
//     return res.json({message : "Rental with id : " + rentalId + " was deleted ."});
//     }
    

// exports.patchRental = (req , res) => {

//     const { rentalId } = req.params ;
//     const rentalToUpdate = req.body ;
//     const rIndex =  rentals.findIndex(r => r._id === rentalId);
    
//     rentals[rIndex].city = rentalToUpdate.city ;
//     rentals[rIndex].title = rentalToUpdate.title ;
    
//     return res.json({message : "Rental with id : " + rentalId + " was updated ."});
//     }
    
//middlewares 

exports.isUserRentalOwner = (req , res , next) => {
  const { rental } = req.body ;
  const user = res.locals.user ;

  Rental.findById(rental)
  .populate("owner")
  .exec((error , foundRental) => {
    if(error) {
      return res.mongoError(error) ;
    }

    if(foundRental.owner === user.id) {
      return res.sendApiError({status : 422 , title : "Invalid User !!",detail : " Cannot book your own rental !! "}) ;
    }
    next() ;
  })
}  