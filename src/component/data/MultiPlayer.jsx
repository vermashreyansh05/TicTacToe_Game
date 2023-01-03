import React from "react";
import Main from "../screen/main";

const arrayOfElement = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var choice = "X";
var steps = 0;
const winning = [
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
function checkStatus() {
  steps += 1;
  let gameStatus = true;
  if (steps > 4 && gameStatus === true) {
    for (let i = 0; i < 8; i++) {
      for (let element in winning) {
        console.log(winning[element]);
        let winningCondition = winning[element];
        let finalCondition = winningCondition;
        if (
          arrayOfElement[winningCondition[0]] === "X" &&
          arrayOfElement[winningCondition[1]] === "X" &&
          arrayOfElement[winningCondition[2]] === "X"
        ) {
          console.warn("X Wonnnn");
          gameStatus = false;
          alert("Game Over!...X Won...");
          window.location.reload();
          return <Main setCheck={"X won"} />;
          break;
        } else if (
          arrayOfElement[winningCondition[0]] === "O" &&
          arrayOfElement[winningCondition[1]] === "O" &&
          arrayOfElement[winningCondition[2]] === "O"
        ) {
          console.warn("O Wonnnn");
          gameStatus = false;
          alert("Game Over!...O Won...");
          window.location.reload();
          return <Main setCheck={"O won"} />;
          break;
        } else if (steps === 9) {
          console.warn("X Not at", [arrayOfElement]);
          gameStatus = false;
          alert("Game Draw!!!!");
          window.location.reload();
          return <Main setCheck={"Draw"} />;
          break;
        }
      }
    }
  }
}

function MultiPlayer(props) {
  debugger;
  arrayOfElement[props] = choice;
  if (choice === "X") {
    choice = "O";
  } else {
    choice = "X";
  }
  debugger;
  checkStatus();
  return Main("multi_player", arrayOfElement);
}

export default MultiPlayer;
