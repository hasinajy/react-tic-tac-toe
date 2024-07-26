import Board, { XSymbol } from "../Board/Board";
import GameInfo from "../GameInfo/GameInfo";

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