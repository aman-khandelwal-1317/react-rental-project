
import rentals from "./reducers/rentals" ;
import thunk from "redux-thunk" ;
import rental from "./reducers/rental" ;
import { createStore , combineReducers , applyMiddleware} from "redux" ;

// const addPromiseToDispatch = (store) => {
// const { dispatch } = store ;

// return function(action) {
  
//   if(action.then && typeof action.then === "function") {
//     return action.then((action) => {
//        dispatch(action) ;
//     })
//   }
//    dispatch(action) ;
// }
// }

// const addThunkToDispatch = (store) => {
//   const { dispatch } = store ;
  
//   return function(action) {
    
//     if(typeof action === "function") {
//       return action(dispatch) ;
//       }
    
//      dispatch(action) ;
//   }
//   }
  

export function initStore() {
  const reducers = combineReducers({
    rentals : rentals ,
    rental : rental
  }) ;
  const store = createStore(reducers , applyMiddleware(thunk)) ;
  // store.dispatch = addPromiseToDispatch(store) ;
  // store.dispatch = addThunkToDispatch(store) ;
  return store ;
}
