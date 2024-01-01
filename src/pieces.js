const reqSvgs = require.context("./svgs/figures/", true, /\.svg$/);
const paths = reqSvgs.keys();
const svgs = paths.map(path => reqSvgs(path));

const Pawn = (color, position, hasMoved) => {
    const name = "pawn";
    const offsets = [];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dPawn.svg")];
        offsets.push(7, 8, 9);
    } else {
        offsets.push(-7, -8, -9);
        icon = svgs[paths.indexOf("./lPawn.svg")];
    }

    return { color, position, hasMoved, icon, name, offsets };
};

const Knight = (color, position) => {
    const name = "knight";
    const offsets = [-17, -15, -6, 10, 17, 15, 6, -10];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dKnight.svg")];
    } else {
        icon = svgs[paths.indexOf("./lKnight.svg")];
    }

    return { color, position, icon, name, offsets };
};

const Bishop = (color, position) => {
    const name = "bishop";
    const offsets = [-9, 9, -7, 7];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dBishop.svg")];
    } else {
        icon = svgs[paths.indexOf("./lBishop.svg")];
    }

    return { color, position, icon, name, offsets };
};

const Rook = (color, position, hasMoved) => {
    const name = "rook";
    const offsets = [-1, 1, -8, 8];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dRook.svg")];
    } else {
        icon = svgs[paths.indexOf("./lRook.svg")];
    }

    return { color, position, hasMoved, icon, name, offsets };
};

const Queen = (color, position) => {
    const name = "queen";
    const offsets = [-1, 1, -8, 8, -9, 9, -7, 7];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dQueen.svg")];
    } else {
        icon = svgs[paths.indexOf("./lQueen.svg")];
    }

    return { color, position, icon, name, offsets };
};

const King = (color, position, hasMoved) => {
    const name = "king";
    const offsets = [-9, -8, -7, -1, 1, 7, 8, 9];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dKing.svg")];
    } else {
        icon = svgs[paths.indexOf("./lKing.svg")];
    }

    return { color, position, hasMoved, icon, name, offsets };
};

const Empty = position => {
    const name = "empty";
    return { name, position };
};

export { Pawn, Knight, Bishop, Queen, Rook, King, Empty };