import { render } from "@testing-library/react";
import axios from "axios";
import React from "react";
import Dashboard from "../screen/Dashboard";

const ResetGame = async (newData) => {
  debugger;
  console.log(newData);
  localStorage.clear();
  const resp = await axios.get(
    `http://localhost:4000/${newData[2]}?board=${newData[0]}&reset=true`
  );
  console.log("responce reset = ", resp);
  render(
    <>
      <Dashboard />
    </>
  );
};

export default ResetGame;
