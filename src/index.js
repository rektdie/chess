import { board } from "./board";
import { drawBoard } from "./dom";

const startingFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const chessBoard = board();
chessBoard.setBoard(startingFEN);

let colorToMove = "light";
let moves = chessBoard.generateAllMoves();
drawBoard(chessBoard);

function newTurn() {
    if (colorToMove === "dark") {
        colorToMove = "light";
    } else {
        colorToMove = "dark";
    }

    moves = chessBoard.generateAllMoves();
}


export { chessBoard, moves, newTurn, colorToMove };