
import rentals from "./reducers/rentals" ;
import { createStore , combineReducers } from "redux" ;

export function initStore() {
  const reducers = combineReducers({
    rentals : rentals
  })
  const store = createStore(reducers) ;
  return store ;
}
