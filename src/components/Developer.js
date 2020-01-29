// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";

// The "unconnected" inner component:
class Developer extends React.Component {
  render() {
    const loading = !this.props.devs;
    return (
      <div>
        <h2>Developer Profile</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Name: {this.props.devs.rows[0].name}</p>
            <p>Email: {this.props.devs.rows[0].email}</p>
          </div>
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
export default connect(mapStateToProps)(Developer);
