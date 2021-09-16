import React from "react"
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import Knighth from "./Component1"
import Board from "./Board"

const chessGame = () => {
    //...logic...
    return (
        <DndProvider backend={HTML5Backend}>
            {/* my component */}
            {/* <Knighth/> */}
            <Board/>

            {/* end my component */}
        </DndProvider>
    )
}

export default chessGame
