
import axiosService from "services/AxiosService" ;
import { extractApiErrors } from "./index" ;
const { bwmAxios } = axiosService ;

export const fetchRentals = () => {

    return function(dispatch) {
  
      bwmAxios.get("/rentals")
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
     const res = await bwmAxios.get("/rentals/" + rentalId)
      
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
    
    return bwmAxios.post("/rentals" , newRental ) ;
  }
  