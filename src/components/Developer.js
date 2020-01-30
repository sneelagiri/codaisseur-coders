// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";

// The "unconnected" inner component:
class Developer extends React.Component {
  render() {
    const loading = !this.props.devs;
    return (
      <div>
        <h2>Developer Profiles</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          this.props.devs.rows.map(dev => {
            return (
              <div key={uuid.v4()}>
                <p>
                  Name: {dev.name} | Email: {dev.email}
                </p>
              </div>
            );
          })
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
