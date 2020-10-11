
import React from "react" ;
import RentalHome from "pages/RentalHome" ;
import RentalDetail from "pages/RentalDetail" ;
import Login from "pages/Login" ;
import Register from "pages/Register" ;
import AuthRoute from "components/auth/AuthRoute" ;
import GuestRoute from "components/auth/GuestRoute" ;
import SecretPage from "pages/SecretPage" ;
import {
  Switch ,
  Route
} from "react-router-dom" ;
import RentalNew from "pages/RentalNew";

const Routes = () => {
  return (
    <div className="container bwm-container">
    <Switch>
    <AuthRoute path="/secret" >
      <SecretPage />
  </AuthRoute>
   <GuestRoute path="/login">
    <Login />
  </GuestRoute>
  <AuthRoute path="/rentals/new" >
      <RentalNew />
  </AuthRoute>
  <Route path="/rentals/:id">
   <RentalDetail />
 </Route>
  <GuestRoute path="/register">
   <Register />
 </GuestRoute>
 <Route exact path="/">
  <RentalHome />
 </Route>
 </Switch>
 </div>
  )
}

export default Routes ;
