// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import api from "../api";
// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    // Do the data fetch...
    api("/developers").then(data => {
      // Tell the Redux store the data has been fetched
      this.props.dispatch({
        type: "developers/FETCHED",
        payload: data
      });
    });
  }
  render() {
    const loading = !this.props.devs;
    return (
      <div>
        <h1>Codaisseur developers</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>We have {this.props.devs.count} developers!</p>
        )}
      </div>
    );
  }
}
// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component:
function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    devs: reduxState.developers
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(DevelopersList);
