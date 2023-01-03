import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import Main from "./main";
const DashboardScreen = () => {
  const multiScreen = () => {
    Dashboard("multi_player");
  };

  return (
    <>
      <h1>Dashboard</h1>
      <hr />
      <h1>Tic Tac Toe</h1>
      <hr style={{ width: "20%", marginLeft: "40%" }} />
      <div className="container">
        <button to="main" className="btn btn-warning">
          Single Player
        </button>
        <hr style={{ width: "10%", marginLeft: "45%" }} />
        <Link
          onClick={() => Main("multi_player")}
          to="main"
          className="btn btn-danger"
        >
          Multi Player
        </Link>
      </div>
    </>
  );
};

export default DashboardScreen;
