import { useState } from "react";
import Knight from "./Component1";
import Square from "./Square";

const arr = [0, 1, 2, 3, 4];

const Board = () => {
  const [knightPosition, setKnightPosition] = useState([2, 2]);

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
            <div
              key={indexY}
              style={{
                height: "20%",
                backgroundColor:
                  indexY % 2 === 0 && indexX % 2 === 0
                    ? "white"
                    : indexY % 2 === 1 && indexX % 2 === 1
                    ? "white"
                    : indexY % 2 === 0 && indexX % 2 === 1
                    ? "black"
                    : "black",
              }}
              onClick={() => {
                setKnightPosition([indexX,indexY])
              }}
            >
              {knightPosition[0] === indexX && knightPosition[1] === indexY && (
                <Knight />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
