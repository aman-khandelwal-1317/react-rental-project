
import React ,{useState , useEffect , useCallback} from "react" ;
import "./CounterApp.css" ;
import PropTypes from "prop-types" ;
import CounterView from "./CounterView" ;

// set is object that keeps only unique data
const functions = new Set() ;

const CounterApp = (props) => {

const [count,setCount] = useState(0);
const {title} = props ;
// const stateArray = useState(100) ;
// const myValue = stateArray[0];
// const changeValue = stateArray[1] ;



useEffect(() =>{

} , []) ;

const changeValue = useCallback((step) => {
setCount(count + step) ;
} , []) ;

functions.add(changeValue) ;

  return(
    <div className="counter-app">
        <h1>{title}</h1>
         <CounterView
         countValue = {count}
         handleIncrement = {changeValue} />
    </div>

  )

}

 // CounterApp.PropTypes = {
 //   title : PropTypes.string
 // }
// class CounterApp extends React.Component {
//
// state = {
//   count : 0
// }
//
//
// constructor(){
//   super();
//   // this.changeValue = this.changeValue.bind(this);
// }
// changeValue = (step) => {
//
// this.setState({
//   count : this.state.count + step
// })
// }
//
//   render(){
//       const {title} = this.props ;
//     return (
//
//       <div className="counter-app">
//              <h1>{title}</h1>
//              <h1 className="value">{this.state.count}</h1>
//              <button onClick={() => this.changeValue(1)}>Increment</button>
//              <button onClick={() => this.changeValue(-1)}>Decrement</button>
//          </div>
//     )
//   }
// }

export default CounterApp ;
