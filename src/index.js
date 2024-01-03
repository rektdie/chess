import { board } from "./board";
import { drawBoard } from "./dom";

const startingFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const chessBoard = board();
chessBoard.setBoard(startingFEN);
drawBoard(chessBoard.squares);

const threatMap = {};

console.log(generateMoves(chessBoard.getSquare(62)));
console.log(threatMap);

function generateMoves(piece) {
    const moves = [];

    if (piece.name === "pawn") {
        for (const offset of piece.offsets) {
            const target = chessBoard.getSquare(piece.position + offset);
            if (!target) continue;

            if (offset % 2 === 0) {
                if (target.name === "empty") {
                    moves.push(target.position);

                    if (!piece.hasMoved && chessBoard.getSquare(target.position + offset).name === "empty") {
                        moves.push(target.position + offset);
                    }
                }
            } else {
                const rows = chessBoard.rowsTravelled(piece.position, target.position);

                if (rows === 1) {
                    pushThreatMap(piece, target);

                    if (target.name !== "empty" && target.color !== piece.color) {
                        moves.push(target.position);
                    }
                }
            }
        }
    } else if (piece.name === "knight") {
        for (const offset of piece.offsets) {
            const target = chessBoard.getSquare(piece.position + offset);
            if (!target) continue;

            const rows = chessBoard.rowsTravelled(piece.position, target.position);

            if (rows === 2 || rows === 1) {
                pushThreatMap(piece, target);
                if (target.name === "empty" || target.color !== piece.color) {
                    moves.push(target.position);
                }
            }
        }
    } else if (piece.name === "king") {
        for (const offset of piece.offsets) {
            const target = chessBoard.getSquare(piece.position + offset);
            if (!target) continue;

            const rows = chessBoard.rowsTravelled(piece.position, target.position);

            if (rows === 1 || rows === 0) {
                pushThreatMap(piece, target);
                if (target.name === "empty" || target.color !== piece.color) {
                    moves.push(target.position);
                }
            }
        }
    }

    return moves;
}

function pushThreatMap(attacker, target) {
    if (threatMap[target.position]) {
        threatMap[target.position].push(attacker);
    } else {
        threatMap[target.position] = [attacker];
    }
}

function findEnemyThreats(currentColor) {
    const threats = [];

    for (const [key, value] of Object.entries(threatMap)) {
        for (const attacker of value) {
            if (attacker.color !== currentColor) {
                threats.push(Number(key));
            }
        }
    }

    return threats;
}

export { chessBoard };