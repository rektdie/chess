import "./style.css";
import { board } from "./index.js";

const boardDiv = document.querySelector(".board");

function drawBoard(board) {
    for (const row of board) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (const square of row) {
            const squareDiv = document.createElement("div");
            squareDiv.textContent = square;
            squareDiv.classList.add("square");

            if ((board.indexOf(row) + square) % 2 == 0) {
                squareDiv.classList.add("dark");
            } else {
                squareDiv.classList.add("light");
            }

            rowDiv.appendChild(squareDiv);
        }

        boardDiv.appendChild(rowDiv);
    }
}

drawBoard(board.squares);