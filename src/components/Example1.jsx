import React from "react"
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import Component1 from "./Component1"

const Board = () => {
    //...logic...
    return (
        <DndProvider backend={HTML5Backend}>
            {/* my component */}
            <Component1/>


            {/* end my component */}
        </DndProvider>
    )
}

export default Board
