import { useState } from "react";
import Square from "../Square/Square";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [marker, setMarker] = useState(Array(9).fill('\u00A0'));

    const handleCellClick = (i) => {
        if (marker[i] !== '\u00A0') return;

        const tempMarker = marker.slice();
        tempMarker[i] = (xIsNext) ? 'X' : 'O';

        setMarker(tempMarker);
        setXIsNext(!xIsNext);
    };

    return (
        <div className="board">
            <Row firstIndex={0} onCellClick={handleCellClick} marker={marker} />
            <Row firstIndex={3} onCellClick={handleCellClick} marker={marker} />
            <Row firstIndex={6} onCellClick={handleCellClick} marker={marker} />
        </div>
    );
}

function Row({ firstIndex, onCellClick, marker }) {
    return (
        <div className="board__row">
            <Square value={marker[firstIndex]} onClick={() => { onCellClick(firstIndex) }} />
            <Square value={marker[firstIndex + 1]} onClick={() => { onCellClick(firstIndex + 1) }} />
            <Square value={marker[firstIndex + 2]} onClick={() => { onCellClick(firstIndex + 2) }} />
        </div>
    );
}

function calculateWinner(markers) {
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

        if (markers[a] !== '\u00A0' && markers[a] === markers[b] && markers[a] === markers[c]) {
            return markers[a];
        }
    }

    return null;
}