
const express = require("express") ;
const router = express.Router() ;

const rentals = [
  {
  _id : "asd" ,
  city : "New York" ,
  title : "Very nice place."
},
{
  _id : "jkl" ,
  city : "Berlin" ,
  title : "Very good place."
}
];

router.get("", (req , res) => {
return res.json(rentals);
});

router.get("/:rentalId", (req , res) => {

const { rentalId } = req.params ;
const rental =  rentals.find(r => r._id === rentalId);
return res.json(rental);
});

router.post("" , ( req , res ) => {
  const rentalData = req.body ;
  rentals.push(rentalData) ;

  return res.json({message : "Rental with id : " + rentalData._id + " was added ."});
});

router.delete("/:rentalId", (req , res) => {

const { rentalId } = req.params ;
const rIndex =  rentals.findIndex(r => r._id === rentalId);

rentals.splice(rIndex ,1) ;
return res.json({message : "Rental with id : " + rentalId + " was deleted ."});
});

router.patch("/:rentalId", (req , res) => {

const { rentalId } = req.params ;
const rentalToUpdate = req.body ;
const rIndex =  rentals.findIndex(r => r._id === rentalId);

rentals[rIndex].city = rentalToUpdate.city ;
rentals[rIndex].title = rentalToUpdate.title ;

return res.json({message : "Rental with id : " + rentalId + " was updated ."});
});

module.exports = router ;
