import Knight from "./Component1";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils";

const BoardSquare = ({
  indexX,
  indexY,
  callbackSetKnightPosition,
  knightPosition,
}) => {

  const canMoveKnight = (x, y) => {
    if (
      ((knightPosition[0] + 2 === x || knightPosition[0] - 2 === x) &&
        (knightPosition[1] + 1 === y || knightPosition[1] - 1 === y)) ||
      ((knightPosition[1] + 2 === y || knightPosition[1] - 2 === y) &&
        (knightPosition[0] + 1 === x || knightPosition[0] - 1 === x))
    ) {
      return true;
    }
  };
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => callbackSetKnightPosition([indexX, indexY]),
      canDrop: () => canMoveKnight(indexX, indexY),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [knightPosition]
  );
  return (
    <div
      ref={drop}
      key={indexY}
      style={
        isOver
          ? canDrop
            ? { height: "20%", backgroundColor: "rgba(0, 233, 255,0.3)" }
            : { height: "20%", backgroundColor: "rgba(255, 0, 0,0.5)" }
          : {
              height: "20%",
              backgroundColor: (indexX + indexY) % 2 === 1 ? "black" : "white",
            }
      }
      //   onClick={() => {
      //     callbackSetKnightPosition([indexX, indexY]);
      //   }}
    >
      {knightPosition[0] === indexX && knightPosition[1] === indexY && (
        <Knight />
      )}
    </div>
  );
};

export default BoardSquare;
