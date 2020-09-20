
import rentals from "./reducers/rentals" ;
import rental from "./reducers/rental" ;
import { createStore , combineReducers } from "redux" ;

export function initStore() {
  const reducers = combineReducers({
    rentals : rentals ,
    rental : rental
  }) ;
  const store = createStore(reducers) ;
  return store ;
}
