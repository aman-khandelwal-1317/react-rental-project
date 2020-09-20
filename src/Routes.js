
import React from "react" ;
import RentalHome from "pages/RentalHome" ;
import RentalDetail from "pages/RentalDetail" ;
import Login from "pages/Login" ;
import Register from "pages/Register" ;
import {
  Switch ,
  Route
} from "react-router-dom" ;

const Routes = () => {
  return (
    <div className="container bwm-container">
    <Switch>
   <Route path="/login">
    <Login />
  </Route>
  <Route path="/rentals/:id">
   <RentalDetail />
 </Route>
  <Route path="/register">
   <Register />
 </Route>
 <Route exact path="/">
  <RentalHome />
 </Route>
 </Switch>
 </div>
  )
}

export default Routes ;
