const board = (() => {
    let squares = [];

    for (let i = 0; i < 8; i++) {
        let row = [];
        for (let j = 1; j <= 8; j++) {
            row.push(i * 8 + j);
        }

        squares.push(row);
    }

    return { squares };
})();

export { board };