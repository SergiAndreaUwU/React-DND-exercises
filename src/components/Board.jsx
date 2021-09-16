import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils";
import BoardSquare from "./BoardSquare";
import Knight from "./Component1";
import Square from "./Square";

const arr = [0, 1, 2, 3, 4];

const Board = () => {
  let x = 2;
  let y = 2;
  const [knightPosition, setKnightPosition] = useState([x, y]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
    >
      {arr.map((el, indexX) => (
        <div
          key={indexX}
          style={{
            width: "20%",
            // backgroundColor: indexX % 2 === 0 ? "white" : "black",
          }}
        >
          {arr.map((el, indexY) => (
            <BoardSquare
              key={`${indexX},${indexY}`}
              indexX={indexX}
              indexY={indexY}
              knightPosition={knightPosition}
              callbackSetKnightPosition={(e) => {
                alert(`"knight moved to x:${e[0]}, y:${e[1]}`)  
                setKnightPosition(e)}}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
