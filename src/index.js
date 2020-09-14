
import ReactDOM from 'react-dom' ;
import React from 'react' ;
import "./index.scss" ;
import "bootstrap/dist/js/bootstrap.min.js" ;
import App from "./App.js" ;


// const h2Element = React.createElement("h2" , null , "what a nice day") ;
// const element = React.createElement("h1" , {className : "title"} , "hello world" , h2Element) ;



const rootElement = document.getElementById("root") ;
// ReactDOM.render(<h1 className="title">Hello World</h1> , rootElement ) ;
 ReactDOM.render(<App className="title"/> ,rootElement) ;

//ReactDOM.render(React.createElement(App , {className : "title"}  , null ) , rootElement) ;
