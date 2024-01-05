import { board } from "./board";
import { drawBoard } from "./dom";

const startingFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const chessBoard = board();
const threatMap = {};
chessBoard.setBoard(startingFEN);
const moves = generateAllMoves();

function generateAllMoves() {
    const allMoves = {};

    for (const row of chessBoard.squares) {
        for (const piece of row) {
            if (piece.name !== "empty") {
                allMoves[piece.position] = generatePieceMoves(piece);
            }
        }
    }
    return allMoves;
}

drawBoard(chessBoard.squares);

function generatePieceMoves(piece) {
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

            if ((offset % 2 === 0 && rows === 1) || (offset % 2 !== 0 && rows === 2)) {
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
    } else {
        for (const offset of piece.offsets) {
            let target = chessBoard.getSquare(piece.position + offset);
            if (!target) continue;
            let rows = chessBoard.rowsTravelled(piece.position, target.position);

            if (rows === 1 || rows === 0) {
                while (true) {
                    pushThreatMap(piece, target);

                    if (target.name === "empty") {
                        moves.push(target.position);
                    } else {
                        if (target.color !== piece.color) {
                            moves.push(target.position);
                        }
                        break;
                    }

                    const previousTarget = target;
                    const previousRows = rows;

                    target = chessBoard.getSquare(previousTarget.position + offset);
                    if (!target) break;
                    rows = chessBoard.rowsTravelled(previousTarget.position, target.position);
                    if (rows !== previousRows) break;
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

export { chessBoard, threatMap };