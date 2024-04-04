import { useState } from "react";



export default function GameBoard({onSelectSquare, board }) {
    
    //const [ gameboard, setGameBoard ] = useState(initialGameBoard);

    //function handleSelectSquare(rowIndex, colIndex){
        // setGameBoard((prevGameBoard) => { //inmutable
        //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]//nuevo array
        //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
        //     return updatedBoard;
        // });
        // onSelectSquare();

    return(
    <ol id="game-board">
        {board.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button 
                                onClick={() => onSelectSquare(rowIndex, colIndex)}
                                disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>
                        ))}
                </ol>
            </li>
        )}
    </ol>
    )
};
