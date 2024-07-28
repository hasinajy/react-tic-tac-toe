import { useContext } from "react";
import { OSymbol, XSymbol } from "../Board/Board";
import { WinnerPositionsContext, XIsNextContext } from "../App/App";

export default function GameInfo() {
    return (
        <section className="game-info">
            <TurnInfo />
            <BoardControls />
        </section>
    );
}

function TurnInfo() {
    const winnerPositions = useContext(WinnerPositionsContext);
    const turnDisplay = (winnerPositions !== null) ? <WinnerDisplay /> : <NextTurn />;

    return (
        <section className="game-info__turns">
            {turnDisplay}
            <hr></hr>
            <History />
        </section>
    );
}

function NextTurn() {
    const xIsNext = useContext(XIsNextContext);

    return (
        <section className="game-info__next-turn">
            Next turn:<span className="game-info__symbol-container">{(xIsNext) ? <XSymbol /> : <OSymbol />}</span>
        </section>
    );
}

function WinnerDisplay() {
    const xIsNext = useContext(XIsNextContext);

    return (
        <section className="game-info__next-turn">
            Winner:<span className="game-info__symbol-container">{(xIsNext) ? <OSymbol /> : <XSymbol />}</span>
        </section>
    );
}

function History({ moves }) {
    return (
        <section className="game-info__history">{moves}</section>
    );
}

function Move({ moveId }) {
    return (
        <button className="history__move">Move #{moveId}</button>
    );
}

function BoardControls() {
    return (
        <section className="game-info__board-controls">
            <MoveControls />
            <NewGame />
        </section>
    );
}

function MoveControls() {
    return (
        <section className="board-controls__move-controls">
            <MoveControl symbol={<UndoSymbol />} />
            <MoveControl symbol={<RedoSymbol />} />
        </section>
    );
}

function MoveControl({ symbol }) {
    return (
        <button className="move-controls__undo">{symbol}</button>
    );
}

function UndoSymbol() {
    return (
        <svg className="move-controls__icon" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
                d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z" />
        </svg>
    );
}

function RedoSymbol() {
    return (
        <svg className="move-controls__icon" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
                d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z" />
        </svg>
    );
}

function NewGame() {
    return (
        <button className="board-controls__new-game">New Game</button>
    );
}