import Square from "../Square/Square";

export default function Board() {
    return (
        <div className="board">
            <Row />
            <Row />
            <Row />
        </div>
    );
}

function Row() {
    return (
        <div className="board__row">
            <Square />
            <Square />
            <Square />
        </div>
    );
}