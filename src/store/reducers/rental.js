
import { combineReducers } from "redux" ;

// PURE function
//DONT MUTATE ARGUMENTS
//NO API CALLS , NO ROUTE TRANSITIONS
//MATH.RANDOM()

const initRentalReducer = () => {

  const item = (state = {} , action) => {

    switch(action.type) {
      case "FETCH_RENTAL_BY_ID" :   return action.rental ;
      case  "IS_FETCHING_RENTAL" : return {} ;
      default :                return state ;
    }
    }

    const isFetching = (state  = false  , action) => {
      switch(action.type) {
        case "IS_FETCHING_RENTAL" : 
        return true ;
        case "FETCH_RENTAL_BY_ID" : 
        return false ;
        default: 
        return state ;
      }
    
    }
    
    return combineReducers({
      item ,
      isFetching
    });

  
}

  const rental = initRentalReducer() ;


export default rental ;
