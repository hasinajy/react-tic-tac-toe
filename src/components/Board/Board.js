export default function Board() {
    return (
        <section className="board">
            <BoardRow />
            <BoardRow />
            <BoardRow />
        </section>
    );
}

function BoardRow() {
    return (
        <div className="board__row">
            <BoardSquare symbol={'O'} />
            <BoardSquare symbol={'X'} />
            <BoardSquare symbol={'O'} />
        </div>
    );
}

function BoardSquare({ symbol }) {
    return (
        <button className="board__square">
            {(symbol === 'O') ? <OSymbol /> : <XSymbol />}
        </button>
    );
}

function OSymbol() {
    return (
        <svg className="square__symbol square__symbol--O" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 320">
            <g id="Ellipse_1" data-name="Ellipse 1" fill="none" stroke="#000" stroke-width="64">
                <circle cx="160" cy="160" r="160" stroke="none" />
                <circle cx="160" cy="160" r="128" fill="none" />
            </g>
        </svg>
    );
}

export function XSymbol() {
    return (
        <svg className="square__symbol square__symbol--X" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 320">
            <path id="xmark"
                d="M342.454,150.574A32.017,32.017,0,1,0,297.176,105.3L191.925,210.646,86.574,105.4A32.017,32.017,0,0,0,41.3,150.674L146.646,255.925,41.4,361.276a32.017,32.017,0,0,0,45.279,45.279L191.925,301.2,297.276,406.454a32.017,32.017,0,0,0,45.279-45.279L237.2,255.925Z"
                transform="translate(-31.925 -95.925)" />
        </svg>
    );
}