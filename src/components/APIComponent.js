import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiActions } from "../redux/actions";

const APIComponent = () => {
  const dispatch = useDispatch();

  const apiDataLoading = useSelector(state => state.firstReducer.loading);
  console.log("apiDataLoading", apiDataLoading);
  const apiError = useSelector(state => state.firstReducer.error);
  console.log("apiError", apiError);
  const data = useSelector(state => state.firstReducer.response);
  console.log("data", data);

  useEffect(() => {
    dispatch(apiActions());
  }, []);
  return apiDataLoading ? (
    <p>Loading...</p>
  ) : apiError ? (
    <p>{apiError}</p>
  ) : (
    <p>{data.value}</p>
  );
};

export default APIComponent;
