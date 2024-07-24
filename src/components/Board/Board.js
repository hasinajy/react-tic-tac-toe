import { useState } from "react";
import Square from "../Square/Square";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [marker, setMarker] = useState(Array(9).fill('\u00A0'));

    const handleCellClick = (i) => {
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