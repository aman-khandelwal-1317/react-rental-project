

import React from "react" ;
import {StateContext} from "./Provider" ;

const connect = (selectState) => {
  return (Component) => {

   class Connect extends React.Component {
    render () {
      const slice = selectState(this.context.getState()) ;
      return <Component {...slice}></Component>
    }
  }
  Connect.contextType = StateContext ;
  return Connect ;
}
}
export default connect ;
