
import React , { useEffect } from "react" ;

//only re - rendered when prop will change
const CounterView = React.memo((props) => {

const {countValue , handleIncrement} = props ;

useEffect(() =>{

} , [])

// const generateColor() = () => {
//   return "#" + (Math.random() * 0xFFFFFF<<0).toString(16) ;
// }

  return(
    <div style={{background : "#454578"}}>
    <h1 className="value">{countValue}</h1>
    <button onClick={ () => handleIncrement(1)}>Increment</button>
      <button onClick={() => handleIncrement(-1)}>Decrement</button>
    </div>
  )
})

export default CounterView ;
