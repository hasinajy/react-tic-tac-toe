import { useState } from "react";
import Board from "../Board/Board";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill('\u00A0')]);
    const currentMarker = history[history.length - 1];

    const handlePlay = (newMarker) => {
        setHistory([...history, newMarker]);
        setXIsNext(!xIsNext);
    };

    return (
        <>
            <Board marker={currentMarker} xIsNext={xIsNext} onPlay={handlePlay} />
            <History />
        </>
    );
}

function History() {
    return (
        <div className="history"></div>
    );
}