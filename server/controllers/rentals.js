

const Rental = require("../models/rental");

exports.getRentals = (req , res) => {
  
    Rental.find({}, (err , foundRentals) => {
      if(err){
        return new Rental()
        .sendError(res , {status : 422 ,detail : "Can not retrieve rental data !!" }) ;
      }
       return res.json(foundRentals) ;
    })
    }


exports.getRentalById = (req , res) => {

    const { rentalId } = req.params ;

     Rental.findById(rentalId , (err , foundRental) => {
      if(err){
        return new Rental()
        .sendError(res , {status : 422 ,detail : "Can not retrieve rental data !!" }) ;
      }
      return res.json(foundRental);
     })
    }
    

exports.createRental = ( req , res ) => {
    const rentalData = req.body ;
    
    const newRental = new Rental(rentalData) ;
    newRental.save((err, createdRental) => {
      if(err){
        return new Rental()
        .sendError(res , {status : 422 ,detail : "Can not post rental data !!" }) ;
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
    