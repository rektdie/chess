import { Pawn, King, Queen, Knight, Bishop, Rook, Empty } from "./pieces";

const board = () => {
    const squares = [];
    const threatMap = {};

    const setBoard = fen => {
        squares.length = 0;
        const rows = fen.split(" ")[0].split("/");
        let position = 0;
        for (let i = 0; i < rows.length; i++) {
            const row = [];

            for (let j = 0; j < rows[i].length; j++) {
                const letter = rows[i][j];

                if (parseInt(letter)) {
                    for (let k = 0; k < Number(letter); k++) {
                        row.push(Empty(position));
                        position += 1;
                    }
                    continue;
                }

                const capitalLetter = letter.toUpperCase();
                const color = capitalLetter === letter ? "light" : "dark";

                if (capitalLetter === "P") {
                    row.push(Pawn(color, position, false));
                } else if (capitalLetter === "N") {
                    row.push(Knight(color, position));
                } else if (capitalLetter === "B") {
                    row.push(Bishop(color, position));
                } else if (capitalLetter === "R") {
                    row.push(Rook(color, position, false));
                } else if (capitalLetter === "K") {
                    row.push(King(color, position, false));
                } else if (capitalLetter === "Q") {
                    row.push(Queen(color, position));
                }
                position += 1;
            }
            squares.push(row);
        }
    };

    const getSquare = position => {
        if (position < 0 || position > 63) return null;

        const row = Math.floor(position / 8);
        const square = position % 8;

        return squares[row][square];
    };

    const rowsTravelled = (start, target) => {
        const startRow = Math.floor(start / 8);
        const targetRow = Math.floor(target / 8);

        return Math.abs(startRow - targetRow);
    };

    function generatePieceMoves(piece) {
        const moves = [];

        if (piece.name === "pawn") {
            for (const offset of piece.offsets) {
                const target = getSquare(piece.position + offset);
                if (!target) continue;

                if (offset % 2 === 0) {
                    if (target.name === "empty") {
                        moves.push(target.position);

                        if (!piece.hasMoved && getSquare(target.position + offset).name === "empty") {
                            moves.push(target.position + offset);
                        }
                    }
                } else {
                    const rows = rowsTravelled(piece.position, target.position);

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
                const target = getSquare(piece.position + offset);
                if (!target) continue;

                const rows = rowsTravelled(piece.position, target.position);

                if ((offset % 2 === 0 && rows === 1) || (offset % 2 !== 0 && rows === 2)) {
                    pushThreatMap(piece, target);
                    if (target.name === "empty" || target.color !== piece.color) {
                        moves.push(target.position);
                    }
                }
            }
        } else if (piece.name === "king") {
            for (const offset of piece.offsets) {
                const target = getSquare(piece.position + offset);
                if (!target) continue;

                const rows = rowsTravelled(piece.position, target.position);

                if (rows === 1 || rows === 0) {
                    pushThreatMap(piece, target);
                    if (target.name === "empty" || target.color !== piece.color) {
                        moves.push(target.position);
                    }
                }
            }
        } else {
            for (const offset of piece.offsets) {
                let target = getSquare(piece.position + offset);
                if (!target) continue;
                let rows = rowsTravelled(piece.position, target.position);

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

                        target = getSquare(previousTarget.position + offset);
                        if (!target) break;
                        rows = rowsTravelled(previousTarget.position, target.position);
                        if (rows !== previousRows) break;
                    }
                }
            }
        }

        return moves;
    }

    function generateAllMoves(currentBoard) {
        const allMoves = {};

        for (const row of currentBoard.squares) {
            for (const piece of row) {
                if (piece.name !== "empty") {
                    allMoves[piece.position] = generatePieceMoves(piece);
                }
            }
        }
        return allMoves;
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

    return { squares, threatMap, getSquare, setBoard, generateAllMoves };
};

export { board };