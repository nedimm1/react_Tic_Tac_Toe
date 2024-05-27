import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard() {

    const [GBoard, setGBoard] = useState(initialGameBoard)

    function handleSelect(rowIndex, columnIndex) {
        setGBoard((prevGBoard) => {
            const updatedBoard = prevGBoard.map(row => row.slice())
            updatedBoard[rowIndex][columnIndex] = "X"
            return updatedBoard
        })
    }

    return (
        <ol id="game-board">
            {GBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, columnIndex) => (
                            <li key={columnIndex}>
                                <button onClick={() => handleSelect(rowIndex, columnIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}
