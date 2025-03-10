import React, { useCallback, useState } from "react";
import Board from "../Board/Board";
import GameInfo, { Move } from "../GameInfo/GameInfo";

export const BoardStateContext = React.createContext();
export const HandleCellClickContext = React.createContext();
export const XIsNextContext = React.createContext();
export const WinnerPositionsContext = React.createContext();
export const HandleNewGameContext = React.createContext();
export const MovesContext = React.createContext();
export const HandleUndoContext = React.createContext();
export const HandleRedoContext = React.createContext();

const WHITE_SPACE = '\u00A0';

export default function App() {
    const [winnerPositions, setWinnerPositions] = useState(null);
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(WHITE_SPACE)]);
    const [redoHistory, setRedoHistory] = useState(null);
    const [newMoveExists, setNewMoveExists] = useState(false);
    const [boardStateIndex, setBoardStateIndex] = useState(0);
    const boardState = history[boardStateIndex];

    const handleCellClick = useCallback((iCell) => {
        if (boardState[iCell] !== WHITE_SPACE || winnerPositions !== null) return;

        const newBoardState = boardState.slice();
        newBoardState[iCell] = (xIsNext) ? 'X' : 'O';

        setHistory([...history, newBoardState]);
        setBoardStateIndex(boardStateIndex + 1);
        setNewMoveExists(true);
        setRedoHistory(null);
        setXIsNext(!xIsNext);
        setWinnerPositions(calculateWinner(newBoardState));
    }, [history]);

    const handleNewGame = useCallback(() => {
        setWinnerPositions(null);
        setXIsNext(true);
        setHistory([Array(9).fill(WHITE_SPACE)]);
        setRedoHistory(null);
        setBoardStateIndex(0);
    }, []);

    const handleUndo = useCallback((undoCount) => {
        if (history.length > 1 && winnerPositions === null) {
            const updatedBoardStateIndex = boardStateIndex - undoCount;
            const tempRedoHistory = (redoHistory === null) ? [] : redoHistory.slice();
            tempRedoHistory.unshift(...history.slice(updatedBoardStateIndex + 1));

            setNewMoveExists(false);
            setBoardStateIndex(updatedBoardStateIndex);
            setHistory(history.slice(0, updatedBoardStateIndex + 1));
            setRedoHistory(tempRedoHistory);
            setXIsNext((undoCount % 2 === 0) ? xIsNext : !xIsNext);
        }
    }, [history]);

    const handleRedo = useCallback(() => {
        if (!newMoveExists && redoHistory !== null && redoHistory.length !== 0) {
            let tempRedoHistory = redoHistory.slice();

            setHistory([...history, tempRedoHistory.shift()]);
            setBoardStateIndex(boardStateIndex + 1);
            setRedoHistory(tempRedoHistory);
            setXIsNext(!xIsNext);
        }
    }, [history]);

    const moves = history.map((move, iMove) => {
        if (iMove !== 0) {
            return (
                <Move key={iMove} iMove={iMove} onJumpUndo={() => { handleUndo(boardStateIndex - iMove) }} />
            );
        }
    })

    return (
        <BoardStateContext.Provider value={boardState}>
            <HandleCellClickContext.Provider value={handleCellClick}>
                <XIsNextContext.Provider value={xIsNext}>
                    <WinnerPositionsContext.Provider value={winnerPositions}>
                        <HandleNewGameContext.Provider value={handleNewGame}>
                            <MovesContext.Provider value={moves}>
                                <HandleUndoContext.Provider value={handleUndo}>
                                    <HandleRedoContext.Provider value={handleRedo}>
                                        <h1 className="page-title">Tic-Tac-Toe</h1>

                                        <hr className="sep--large"></hr>

                                        <div className="container">
                                            <Board />
                                            <GameInfo />
                                        </div>
                                    </HandleRedoContext.Provider>
                                </HandleUndoContext.Provider>
                            </MovesContext.Provider>
                        </HandleNewGameContext.Provider>
                    </WinnerPositionsContext.Provider>
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