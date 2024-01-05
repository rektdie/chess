import { board } from "./board";
import { drawBoard } from "./dom";

const startingFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const chessBoard = board();

chessBoard.setBoard(startingFEN);
const moves = chessBoard.generateAllMoves(chessBoard);
drawBoard(chessBoard.squares);

export { chessBoard };