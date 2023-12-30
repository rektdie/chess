import { chessBoard } from "./index.js";

const reqSvgs = require.context("./svgs/figures/", true, /\.svg$/);
const paths = reqSvgs.keys();
const svgs = paths.map(path => reqSvgs(path));

const Pawn = (color, position, hasMoved) => {
    const name = "pawn";
    const legalMoves = [];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dPawn.svg")];
    } else {
        icon = svgs[paths.indexOf("./lPawn.svg")];
    }

    return { color, position, hasMoved, icon, name };
};

const Knight = (color, position) => {
    const name = "knight";
    const legalMoves = [];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dKnight.svg")];
    } else {
        icon = svgs[paths.indexOf("./lKnight.svg")];
    }

    return { color, position, icon, name };
};

const Bishop = (color, position) => {
    const name = "bishop";
    const legalMoves = [];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dBishop.svg")];
    } else {
        icon = svgs[paths.indexOf("./lBishop.svg")];
    }

    return { color, position, icon, name };
};

const Rook = (color, position, hasMoved) => {
    const name = "rook";
    const legalMoves = [];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dRook.svg")];
    } else {
        icon = svgs[paths.indexOf("./lRook.svg")];
    }

    return { color, position, hasMoved, icon, name };
};

const Queen = (color, position) => {
    const name = "queen";
    const legalMoves = [];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dQueen.svg")];
    } else {
        icon = svgs[paths.indexOf("./lQueen.svg")];
    }

    return { color, position, icon, name };
};

const King = (color, position, hasMoved) => {
    const name = "king";
    const legalMoves = [];
    let icon;

    if (color === "dark") {
        icon = svgs[paths.indexOf("./dKing.svg")];
    } else {
        icon = svgs[paths.indexOf("./lKing.svg")];
    }

    return { color, position, hasMoved, icon, name };
};

const Empty = position => {
    return { position };
};

export { Pawn, Knight, Bishop, Queen, Rook, King, Empty };