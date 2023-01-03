import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { button, Link, useLocation, useNavigate } from "react-router-dom";
import ButtonClick from "../Button/Button";
import { MultiPlayerData, SinglePlayerData } from "../data/Data";
import MultiPlayer from "../data/MultiPlayer";
import ResetGame from "../functions/Reset";
import Dashboard from "./Dashboard";
import "./main.css";

var arrayChance = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

const Main = (userChoice, newData = []) => {
  debugger;
  if (userChoice === "true") {
    debugger;
    setCheck();
  }

  const [arryOfString, setArryOfString] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);

  const [choice, setChoice] = useState("X");
  const [gameString, setGameString] = useState("         ");

  const setCheck = () => {
    setArryOfString(newData);
    return alert("Game Over");
  };

  const checkString = (e) => {
    e.preventDefault();
    const buttonarryOfString = e.target.name - 1;

    var stringBundle = "";

    var stringArry = gameString.split("");
    if (userChoice.Uchoice === "single_player") {
      stringArry[buttonarryOfString] = "x";
      setArryOfString(stringArry);
      const newString = stringArry.join("");
      debugger;
      setGameString(newString);
      stringBundle = newString;
    } else {
      const buttonarryOfString = e.target.name - 1;
      console.log(buttonarryOfString);
      setArryOfString(stringArry);
      stringArry[buttonarryOfString] = choice;
      const newString = stringArry.join("");
      setGameString(newString);
      stringBundle = newString;

      if (choice === "X") {
        setChoice("O");
      } else {
        setChoice("X");
      }
    }
    return (
      <>
        {userChoice.Uchoice === "single_player"
          ? SinglePlayerData(stringBundle)
          : MultiPlayerData(stringBundle)}
      </>
    );
  };

  const checkMultiPlayer = (e) => {
    e.preventDefault();
    debugger;
    const button = e.target.name - 1;
    e.currentTarget.disabled = true;
    arrayChance[button] = choice;
    setArryOfString(arrayChance);
    if (choice === "X") {
      setChoice("O");
    } else {
      setChoice("X");
    }

    return (
      MultiPlayer(button),
      (
        <>
          {userChoice.Uchoice === "multi_player"
            ? null
            : setArryOfString(userChoice)}
        </>
      )
    );
  };

  const resetGame = () => {
    const propsData = [gameString, "reset", userChoice.Uchoice];
    ResetGame(propsData);
    Dashboard(propsData);
  };

  return (
    <>
      <h1 className="Ingame">Main Screen</h1>
      <div class="container-fluid">
        <div className=" col-12 ">
          <h3>Tic tac Toe</h3>
        </div>
        <h6 style={{ marginTop: "10px" }}>{userChoice.Uchoice}</h6>
        <div>
          <Link
            onClick={resetGame}
            to="/"
            style={{
              marginTop: "0%",
              marginBottom: "-8%",
              border: "3px solid",
              color: "darkgreen",
            }}
            className="btn"
          >
            RESET GAME
          </Link>
        </div>
        <div
          style={{ marginTop: "8%", marginLeft: "33%", marginRight: "25%" }}
          className="BoxElement row"
        >
          <div className="BoxRow col-sm border-1">
            <div className="element row-1">
              <button
                id="square1"
                name="1"
                className="square"
                onClick={checkMultiPlayer}
              >
                {arryOfString[0]}
              </button>
            </div>
            <div className="row-2 element">
              <button
                id="square1"
                name="4"
                className="square"
                onClick={checkMultiPlayer}
              >
                {arryOfString[3]}
              </button>
            </div>
            <div className="row-3 element">
              <button
                id="square1"
                name="7"
                className="square"
                onClick={checkMultiPlayer}
              >
                {arryOfString[6]}
              </button>
            </div>
          </div>

          <div className="box_element col-sm">
            <div className="row-1 element">
              <button
                id="square1"
                name="2"
                className="square"
                onClick={checkMultiPlayer}
              >
                {arryOfString[1]}
              </button>
            </div>
            <div className="row-2 element">
              <button
                id="square1"
                name="5"
                className="square"
                onClick={checkMultiPlayer}
              >
                {arryOfString[4]}
              </button>
            </div>
            <div className="row-3 element">
              <button
                id="square1"
                name="8"
                className="square"
                onClick={checkMultiPlayer}
              >
                {arryOfString[7]}
              </button>
            </div>
          </div>

          <div className="box_element col-sm">
            <div className="row-1 element">
              <button
                id="square1"
                name="3"
                className="square"
                onClick={checkMultiPlayer}
              >
                {arryOfString[2]}
              </button>
            </div>
            <div className="row-2 element">
              <button
                id="square1"
                name="6"
                className="square"
                onClick={checkMultiPlayer}
              >
                {arryOfString[5]}
              </button>
            </div>
            <div className="row-3 element">
              <button
                id="square1"
                name="9"
                className="square"
                onClick={checkMultiPlayer}
              >
                {arryOfString[8]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
export { arrayChance };
