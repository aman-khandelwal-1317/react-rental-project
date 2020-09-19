
// PURE function
//DONT MUTATE ARGUMENTS
//NO API CALLS , NO ROUTE TRANSITIONS
//MATH.RANDOM()

const rentals = (state = [] , action) => {

switch(action.type) {
  case "FETCH_RENTALS" :   return action.rentals ;
  case "CREATE_RENTAL" :   return [...state , action.rental] ;
  default :                return state ;
}
  
}

export default rentals ;
