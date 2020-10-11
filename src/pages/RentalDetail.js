
import React from "react" ;
import { withRouter } from "react-router-dom" ;
import {connect} from "react-redux" ;
import { fetchRentalById } from "actions" ;
import { capitalize } from "helpers/functions" ;
import RentalAssets from "components/Rental/RentalAssets";
import RentalInfo from "components/Rental/RentalInfo";
import TomMap from "components/map/TomMap";

class RentalDetail extends React.Component {

componentDidMount() {
  const { id } = this.props.match.params ;
  this.props.dispatch(fetchRentalById(id)) ;
}

componentWillUnmount() {
  this.props.dispatch({type : "UNMOUNT_RENTAL"}) ;
}

get location() {
  const { rental : { city , street } } = this.props ;
  return city ;
}

  render() {
    const { rental , isFetching} = this.props ;
            if(isFetching) {
              return null ;
            }
    return(
      <section id="rentalDetails">
        <div className="upper-section">
          <div classNameName="row">
           
            <div className="col-md-6 ">
              {/* <!-- TODO: Display rental img --> */}
             <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6 ">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
             <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rental : state.rental.item ,
    isFetching : state.rental.isFetching 
  }
}

const RentalDetailWithRouter = withRouter(RentalDetail) ;
export default connect(mapStateToProps)(RentalDetailWithRouter) ;
