import { useState } from "react";
import Square from "../Square/Square";

export default function Board() {
    const [marker, setMarker] = useState(Array(9).fill('\u00A0'));
    const markCell = (i) => {
        const tempMarker = marker.slice();
        tempMarker[i] = 'X';
        setMarker(tempMarker);
    };

    return (
        <div className="board">
            <Row firstIndex={0} cellMarker={markCell} marker={marker} />
            <Row firstIndex={3} cellMarker={markCell} marker={marker} />
            <Row firstIndex={6} cellMarker={markCell} marker={marker} />
        </div>
    );
}

function Row({ firstIndex, cellMarker, marker }) {
    return (
        <div className="board__row">
            <Square value={marker[firstIndex]} cellMarker={() => { cellMarker(firstIndex) }} />
            <Square value={marker[firstIndex + 1]} cellMarker={() => { cellMarker(firstIndex + 1) }} />
            <Square value={marker[firstIndex + 2]} cellMarker={() => { cellMarker(firstIndex + 2) }} />
        </div>
    );
}