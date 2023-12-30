import { Pawn, King, Queen, Knight, Bishop, Rook, Empty } from "./pieces";

const board = () => {
    const squares = [];

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
        const row = Math.floor(position / 8);
        const square = position % 8;

        return squares[row][square];
    };

    return { squares, getSquare, setBoard };
};

export { board };