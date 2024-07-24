import './square.css'

function Square({ value, cellMarker }) {
    return (
        <button className="square" onClick={cellMarker}>{value}</button>
    );
}

export default Square;