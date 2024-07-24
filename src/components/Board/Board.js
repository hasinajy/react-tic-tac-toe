import Square from "../Square/Square";

export default function Board() {
    return (
        <div className="board">
            <Row firstValue={1} />
            <Row firstValue={4} />
            <Row firstValue={7} />
        </div>
    );
}

function Row({ firstValue }) {
    return (
        <div className="board__row">
            <Square value={firstValue} />
            <Square value={firstValue + 1} />
            <Square value={firstValue + 2} />
        </div>
    );
}