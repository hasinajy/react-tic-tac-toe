import { useState } from "react";
import Board from "../Board/Board";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill('\u00A0')]);
    const currentMarker = history[history.length - 1];
    const moves = history.map((marker, moveIndex) => {
        const description = (moveIndex > 0) ? `Go to move #${moveIndex}` : 'Go to game start';

        return (
            <li key={moveIndex}><button>{description}</button></li>
        );
    });

    const handlePlay = (newMarker) => {
        setHistory([...history, newMarker]);
        setXIsNext(!xIsNext);
    };

    return (
        <>
            <Board marker={currentMarker} xIsNext={xIsNext} onPlay={handlePlay} />
            <History moves={moves} />
        </>
    );
}

function History({ moves }) {
    return (
        <div className="history">
            <ul>{moves}</ul>
        </div>
    );
}