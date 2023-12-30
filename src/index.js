import { board } from "./board";
import { drawBoard } from "./dom";

const startingFEN = "r1b1kb1r/ppp1pp1p/2nq1np1/3p4/3P1Q2/1P2P1P1/P1P2P1P/RNB1KBNR w KQkq - 0 1";

const chessBoard = board();
chessBoard.setBoard(startingFEN);
drawBoard(chessBoard.squares);

export { chessBoard };