
import axios from "axios" ;

export const fetchRentals = () => {

  return function(dispatch) {

    axios.get("http://localhost:3000/api/v1/rentals")
    .then(res => {
      const rentals = res.data ;
  
      dispatch( {
        type : "FETCH_RENTALS" ,
        rentals : rentals
      });
    })
  }

}

export const fetchRentalById = (rentalId) => {

  return async function(dispatch) {
     dispatch({type:"IS_FETCHING_RENTAL"});
   const res = await axios.get("http://localhost:3000/api/v1/rentals/" + rentalId)
    
   dispatch( {
    type : "FETCH_RENTAL_BY_ID" ,
    rental : res.data
  });
      
  }
  
//  // const rental = rentalData.find((rental) => rental._id === rentalId)
//   return {
//     type : "FETCH_RENTAL_BY_ID" ,
//     rental : {}
//   }
}

export const createRental = (newRental) => {
  return {
    type : "CREATE_RENTAL" ,
    rental : newRental
  }
}
