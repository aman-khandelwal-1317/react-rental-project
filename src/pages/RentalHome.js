
import React from "react" ;
import RentalCard from "../components/Rental/RentalCard" ;
import {initStore} from "../store" ;
import connect from "../store/connect" ;

debugger ;
const store = initStore() ;
class RentalHome extends React.Component{

state = {
  rentals : []
}
componentDidMount() {
 const { rentals } = this.props ;
  this.setState({
    rentals : rentals
  });
}

renderRentals(rentals){
const newRentals =  rentals.map((rental) => {
    return (
      <div key={ rental._id }className="col-md-3">
       < RentalCard rental = {rental}/>
      </div>
    )
  })
  return newRentals ;
}

  render() {

                const { rentals } = this.state ;
    return  (
      <div className="card-list">
        <div className="container">
          <h1 className="page-title">Your Home All Around the World</h1>
          <div className="row">
          {
            this.renderRentals(rentals)
          }

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals : state.rentals
  }
}
export default connect(mapStateToProps)(RentalHome) ;
