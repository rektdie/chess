import "./style.css";
import { chessBoard, moves, colorToMove } from "./index.js";

const fenInput = document.querySelector("#fen-input");
const fenButton = document.querySelector("#fen-set");
const boardDiv = document.querySelector(".board");

function drawBoard(board) {
    boardDiv.innerHTML = "";

    let dragging;
    let draggingMoves = [];

    let index = 0;
    for (const row of board.squares) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (const square of row) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square", "dropzone");
            squareDiv.setAttribute("data-index", index);

            if (square.name !== "empty") {
                const figureSvg = document.createElement("img");
                figureSvg.setAttribute("src", square.icon);
                figureSvg.classList.add("piece");
                squareDiv.appendChild(figureSvg);

                figureSvg.addEventListener("dragstart", e => {
                    if (colorToMove === square.color) {
                        dragging = e.target;
                        draggingMoves = moves[square.position];

                        for (const pos of draggingMoves) {
                            const targetSquare = document.querySelector(`[data-index="${pos}"`)

                            if ((Math.floor(pos / 8) + pos) % 2 == 0) {
                                targetSquare.classList.add("move-light");
                            } else {
                                targetSquare.classList.add("move-dark");
                            }
                        }
                    }
                });

                figureSvg.addEventListener("dragend", e => {
                    for (const pos of draggingMoves) {
                        const targetSquare = document.querySelector(`[data-index="${pos}"`)

                        targetSquare.classList.remove("move-light", "move-dark");
                    }
                });
            }

            squareDiv.addEventListener("dragover", e => {
                e.preventDefault();
            });

            squareDiv.addEventListener("drop", e => {
                const targetIndex = e.target.getAttribute("data-index");
                const attackerPos = dragging.parentElement
                    .getAttribute("data-index");

                if (colorToMove === board.getSquare(attackerPos).color) {
                    if (moves[attackerPos].includes(Number(targetIndex))) {
                        e.target.appendChild(dragging);
                        board.movePiece(board.getSquare(attackerPos), board.getSquare(targetIndex));
                    }
                }

            });

            if ((board.squares.indexOf(row) + square.position) % 2 == 0) {
                squareDiv.classList.add("light");
            } else {
                squareDiv.classList.add("dark");
            }

            rowDiv.appendChild(squareDiv);
            index++;
        }

        boardDiv.appendChild(rowDiv);
    }
}

fenButton.addEventListener("click", () => {
    chessBoard.setBoard(fenInput.value);
    drawBoard(chessBoard.squares);
});

export { drawBoard };