
import React , { useEffect } from 'react' ;
// import CounterApp from "./components/CounterApp/CounterApp"
import Header from "components/shared/Header" ;
import {initStore} from "store" ;
import {Provider} from "react-redux" ;
import { AuthProvider , useAuth } from "providers/AuthProvider" ;
import Routes from "Routes" ;
//import { Router , Route } from "./components/Router";
import {
  BrowserRouter as Router } from "react-router-dom" ;

  const store = initStore() ;

  const Providers = ({children}) => {
    return (<Provider store={store}>
    <AuthProvider>
      { children }
    </AuthProvider>
    </Provider>)
  }

  const BwmApp = () => {
    const authService = useAuth() ;

   useEffect(() => {
     authService.checkAuthState() ;
   } , [authService])

    return(
      <Router>
      < Header logout={authService.signOut}/>
        <Routes />
      </Router>
    )
  }

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
<Providers>
  <BwmApp />
</Providers>
  )
}

export default App ;
