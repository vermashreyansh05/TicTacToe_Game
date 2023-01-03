import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboard from "../screen/Dashboard";
import Main from "../screen/main";

const MultiPlayerData = async (props) => {
  debugger;
  if (props.length === 2) {
    debugger;
    const resp = await axios.get(
      `http://localhost:4000/multi_player?board=${props[0]}&reset=true`
    );
    console.log("reset", resp);
  } else {
    debugger;
    const resp = await axios.get(
      `http://localhost:4000/multi_player?board=${props}`
    );
    debugger;
    console.log("chance", resp);
    if (resp.data.game_result.result) {
      {
        alert("GAme Over...", resp.data.game_result.result);
      }
    }
  }
};
const RenderData = (props) => {
  const [newData, setNewdata] = useState([]);

  setNewdata(props);

  render(Main(newData));
};

const SinglePlayerData = async (props) => {
  let count = 0;
  debugger;
  if (props.length === 2) {
    debugger;
    const resp = await axios.get(
      `http://localhost:4000/single_player?board=${props[0]}&reset=true`
    );
    console.log("reset resp", resp);
  } else {
    count += 1;
    debugger;
    const resp = await axios.get(
      "http://localhost:4000/single_player?board=" + props
    );
    debugger;
    let board = resp.data.current_board.board;
    let splitBoard = board.split("");
    if (splitBoard.length < 9) {
      while (splitBoard.length < 9) {
        splitBoard.push(" ");
      }
      let newBoard = splitBoard.join("");
      debugger;
      localStorage.setItem("splitBoard", newBoard);
      console.log("newBoard = ", newBoard);
    } else {
      let newBoard = splitBoard.join("");
      localStorage.setItem("splitBoard", newBoard);
      console.log("newBoard = ", newBoard);
    }
  }
  debugger;
  render(Main("single_player", count));
};

export { MultiPlayerData, SinglePlayerData, RenderData };
