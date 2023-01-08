import React from "react";
import { connect } from "react-redux";
import DashboardView from "./DashboardView";
import * as dashboardActions from "../actions";

const DashboardContainer = (props) => {
  return <DashboardView {...props} />;
};

const mapStateToProps = (state) => ({
  sample: state.dashboard.sample,
});
const mapDispatchToProps = (dispatch) => {
  return {
    sampleAction: (data) =>
      new Promise((resolve, reject) => {
        dispatch(
          dashboardActions.getSampleAction({ ...data, resolve, reject })
        );
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
