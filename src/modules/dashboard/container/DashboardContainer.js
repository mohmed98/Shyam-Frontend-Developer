import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import DashboardView from "./DashboardView";
import * as dashboardActions from "../actions";
import useFuzzySearch from "../hooks/useFuzzySearch";

const DashboardContainer = (props) => {
  const [capsuleList, setCapsuleList] = useState([]);
  const [pageSize, setPageSize] = useState(0);
  const hookProps = useFuzzySearch({
    items: props.capsuleList,
    onSearch: setCapsuleList,
  });
  const { setInputValue, inputValue } = hookProps;

  const getCapsulesListFun = useCallback(
    (pageSize) => {
      setPageSize((res) => res + 1);
      props.getCapsuleListAction({ limit: 7, offset: pageSize || 0 });
    },
    [props.getCapsuleListAction, setPageSize]
  );

  useEffect(() => {
    getCapsulesListFun();
  }, [getCapsulesListFun]);

  useEffect(() => {
    setCapsuleList(props.capsuleList);
  }, [props.capsuleList]);

  return (
    <DashboardView
      {...props}
      capsuleList={capsuleList}
      pageSize={pageSize}
      getCapsulesListFun={getCapsulesListFun}
      setInputValue={setInputValue}
      inputValue={inputValue}
    />
  );
};

const mapStateToProps = (state) => ({
  capsuleList: state.dashboard.capsuleList,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getCapsuleListAction: (filters) =>
      new Promise((resolve, reject) => {
        dispatch(
          dashboardActions.getCapsuleListAction({ filters, resolve, reject })
        );
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
