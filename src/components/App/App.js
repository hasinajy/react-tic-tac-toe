import React, { useCallback, useState } from "react";
import Board from "../Board/Board";
import GameInfo from "../GameInfo/GameInfo";

export const BoardStateContext = React.createContext();
export const HandleCellClickContext = React.createContext();
export const XIsNextContext = React.createContext();

const WHITE_SPACE = '\u00A0';

export default function App() {
    const [xIsNext, setXIsNext] = useState(true);
    const [boardState, setBoardState] = useState(Array(9).fill(WHITE_SPACE));

    const handleCellClick = useCallback((iCell) => {
        if (boardState[iCell] !== WHITE_SPACE) return;

        const tempBoardState = boardState.slice();
        tempBoardState[iCell] = (xIsNext) ? 'X' : 'O';

        setBoardState(tempBoardState);
        setXIsNext(!xIsNext);
    }, [boardState, xIsNext]);

    return (
        <BoardStateContext.Provider value={boardState}>
            <HandleCellClickContext.Provider value={handleCellClick}>
                <XIsNextContext.Provider value={xIsNext}>
                    <h1 className="page-title">Tic-Tac-Toe</h1>

                    <hr className="sep--large"></hr>

                    <div className="container">
                        <Board />
                        <GameInfo />
                    </div>
                </XIsNextContext.Provider>
            </HandleCellClickContext.Provider>
        </BoardStateContext.Provider>
    );
}