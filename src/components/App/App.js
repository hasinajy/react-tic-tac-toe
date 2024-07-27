import React, { useState } from "react";
import Board from "../Board/Board";
import GameInfo from "../GameInfo/GameInfo";

export const BoardStateContext = React.createContext();

const WHITE_SPACE = '\u00A0';

export default function App() {
    const [boardState, setBoardState] = useState(Array(9).fill(WHITE_SPACE));

    return (
        <BoardStateContext.Provider value={boardState}>
            <h1 className="page-title">Tic-Tac-Toe</h1>

            <hr className="sep--large"></hr>

            <div className="container">
                <Board />
                <GameInfo />
            </div>
        </BoardStateContext.Provider>
    );
}