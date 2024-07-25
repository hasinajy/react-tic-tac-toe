import { useState } from "react";
import Board from "../Board/Board";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill('\u00A0')]);

    return (
        <>
            <Board />
        </>
    );
}