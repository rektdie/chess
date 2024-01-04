import "./style.css";
import { chessBoard, threatMap } from "./index.js";

const fenInput = document.querySelector("#fen-input");
const fenButton = document.querySelector("#fen-set");
const boardDiv = document.querySelector(".board");

function drawBoard(board) {
    boardDiv.innerHTML = "";
    for (const row of board) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (const square of row) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square");

            if (square.name !== "empty") {
                const figureSvg = document.createElement("img");
                figureSvg.setAttribute("src", square.icon);
                figureSvg.classList.add("piece");
                squareDiv.appendChild(figureSvg);
            }

            if ((board.indexOf(row) + square.position) % 2 == 0) {
                if (square.position in threatMap) {
                    squareDiv.classList.add("threat-light")
                } else {
                    squareDiv.classList.add("light");
                }
            } else {
                if (square.position in threatMap) {
                    squareDiv.classList.add("threat-dark")
                } else {
                    squareDiv.classList.add("dark");
                }
            }

            rowDiv.appendChild(squareDiv);
        }

        boardDiv.appendChild(rowDiv);
    }
}

fenButton.addEventListener("click", () => {
    chessBoard.setBoard(fenInput.value);
    drawBoard(chessBoard.squares);
});

export { drawBoard };