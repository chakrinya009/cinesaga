import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

const App = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);
  console.log(url, "url");
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <div>
      App
      {url?.total_pages}
    </div>
  );
};

export default App;
