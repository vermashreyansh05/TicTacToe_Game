import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import Main from "./main";

const Dashboard = (propScreen) => {
  const [screen, setScreen] = useState("");
  const setPara = () => {
    if (propScreen) {
      setScreen("");
    } else {
      setScreen("");
    }
  };

  if (propScreen.length === 1) {
    setPara("");
  }

  const handleChange = (userChoice) => {
    setScreen(userChoice);
  };

  return (
    <>
      {screen === "" ? (
        <>
          <div className="Box">
            <h1>Dashboard</h1>
            <hr />
            <h1>Tic Tac Toe</h1>
            <hr style={{ width: "20%", marginLeft: "40%" }} />
            <div className="container">
              <button
                onClick={() => handleChange("single_player")}
                className="btn btn-warning"
              >
                Single Player
              </button>
              <hr style={{ width: "10%", marginLeft: "45%" }} />
              <Link
                onClick={() => handleChange("multi_player")}
                className="btn btn-danger"
              >
                Multi Player
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Main Uchoice={screen} />
      )}
    </>
  );
};

export default Dashboard;
