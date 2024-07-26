import Board from "../Board/Board";

export default function App() {
    return (
        <>
            <h1 className="page-title">Tic-Tac-Toe</h1>

            <hr className="sep--large"></hr>

            <div className="container">
                <Board />
                <GameInfo />
            </div>
        </>
    );
}

function GameInfo() {
    return (
        <section className="game-info">
            <section className="game-info__turns">
                <section className="game-info__next-turn">
                    Next turn:

                    <span className="game-info__symbol-container">
                        <svg className="square__symbol square__symbol--X" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 320">
                            <path id="xmark"
                                d="M342.454,150.574A32.017,32.017,0,1,0,297.176,105.3L191.925,210.646,86.574,105.4A32.017,32.017,0,0,0,41.3,150.674L146.646,255.925,41.4,361.276a32.017,32.017,0,0,0,45.279,45.279L191.925,301.2,297.276,406.454a32.017,32.017,0,0,0,45.279-45.279L237.2,255.925Z"
                                transform="translate(-31.925 -95.925)" />
                        </svg>
                    </span>
                </section>

                <hr></hr>

                <section className="game-info__history">
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                    <button className="history__move">Move #1</button>
                </section>
            </section>

            <section className="game-info__board-controls">
                <section className="board-controls__move-controls">
                    <button className="move-controls__undo">
                        <svg className="move-controls__icon" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path
                                d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z" />
                        </svg>
                    </button>

                    <button className="move-controls__redo">
                        <svg className="move-controls__icon" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path
                                d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z" />
                        </svg>
                    </button>
                </section>

                <button className="board-controls__new-game">New Game</button>
            </section>
        </section>
    );
}