
import React from 'react' ;
// import CounterApp from "./components/CounterApp/CounterApp"
import Header from "./components/shared/Header" ;

import Routes from "./Routes" ;
//import { Router , Route } from "./components/Router";
import {
  BrowserRouter as Router } from "react-router-dom" ;
const App = () => {
  //  <h1 className={props.className}>Hello World</h1>
  // <CounterApp title = "I am CounterApp"/>

  //   const renderPages = () => {
  //   const {pathname} = window.location ;
  //   switch(pathname){
  //
  //     case "/" :
  //     return <RentalHome /> ;
  //     case "/Login" :
  //     return <Login /> ;
  //     case "/Register" :
  //     return <Register /> ;
  //     default : return <RentalHome />
  //   }
  // }
  return(

  <Router>
   < Header />
     <Routes />
   </Router>

  )
}

export default App ;
