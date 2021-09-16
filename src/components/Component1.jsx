import { ItemTypes } from "../utils";
import { useDrag } from "react-dnd";

const Knight = () => {
  //the result array contains props as first item(contains props I collected from the drag-and-drop system)
  //and a ref as 2nd item (look line 16)
  const [{ isDragging }, drag] = useDrag(() => ({
    //here I can add extra info to identify the kind of piece being dragged, type is a MUST
    type: ItemTypes.KNIGHT,
    //collect function is basically a way to transform state from the drag-and-drop system into usable props for my components

    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  console.log("isDragging",isDragging)
  console.log("drag",drag)

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: "100px",
        fontWeight: "bold",
        cursor: "move",
        color:"gray"
      }}
    >
      ♘
    </div>
  );
};

export default Knight;
