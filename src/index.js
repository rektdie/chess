import { board } from "./board";
import { drawBoard } from "./dom";

const startingFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const chessBoard = board();
chessBoard.setBoard(startingFEN);
drawBoard(chessBoard.squares);

console.log(generateMoves(chessBoard.getSquare(1)));

function generateMoves(piece) {
    const moves = [];

    if (piece.name === "pawn") {
        for (const offset of piece.offsets) {
            const target = chessBoard.getSquare(piece.position + offset);
            if (!target) continue;

            if (!piece.hasMoved) {
                if (offset % 2 === 0) {
                    moves.push(target.position, target.position + offset);
                    return moves;
                } else {
                    continue;
                }
            }

            if (offset % 2 === 0) {
                if (target.name === "empty") {
                    moves.push(target.position);
                }
            } else {
                const rows = chessBoard.rowsTravelled(piece.position, target.position);
                if (rows === 1 && target.name !== "empty" && target.color !== piece.color) {
                    moves.push(target.position);
                }
            }
        }
    } else if (piece.name === "knight") {
        for (const offset of piece.offsets) {
            const target = chessBoard.getSquare(piece.position + offset);
            if (!target) continue;

            const rows = chessBoard.rowsTravelled(piece.position, target.position);

            if (rows === 2 || rows === 1) {
                if (target.name === "empty" || target.color !== piece.color) {
                    moves.push(target.position);
                }
            }
        }
    }

    return moves;
}

export { chessBoard };