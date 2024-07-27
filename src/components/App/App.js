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

        const winResult = calculateWinner(boardState);

        if (winResult !== null) {
            console.log("Win positions: " + winResult.toString());
            console.log('Winner: ' + ((xIsNext) ? 'X' : 'O'));
            return;
        }

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

function calculateWinner(boardState) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const line of lines) {
        const [a, b, c] = line;

        if (boardState[a] !== WHITE_SPACE && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return [a, b, c];
        }
    }

    return null;
}