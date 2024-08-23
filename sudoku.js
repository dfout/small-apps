import puzzles from "./puzzles";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app-name').innerText = 'Sudoku'

    const board = createSudokuBoard();

    const displayDiv = document.getElementById('display');
    displayDiv.appendChild(board)

    const optionsDiv = document.getElementById('options')
    const difficulties = ['Easy', 'Medium', 'Hard'];
    difficulties.forEach(difficulty => {
        const button = document.createElement('button');
        button.textContent = difficulty;
        button.addEventListener('click', () => {
            clearSudokuBoard();  // Clear the board before loading the new one
            loadSudoku(difficulty.toLowerCase());
        });
        optionsDiv.appendChild(button);

        
    });
    loadSudoku('easy')
    const resetButton = document.createElement('button');
    resetButton.textContent= 'Reset'
    resetButton.addEventListener('click', resetBoard)
    optionsDiv.appendChild(resetButton)
})

function clearSudokuBoard(){
    const displayDiv = document.getElementById('display');
    displayDiv.innerHTML = ''
}

function loadSudoku(difficulty){
    clearSudokuBoard();

    const board = createSudokuBoard(difficulty)

    const displayDiv = document.getElementById('display');
    displayDiv.appendChild(board)
}


function createSudokuBoard(difficulty){

    const puzzle = puzzles[difficulty];

    let gridSize, subGridSize;
    if (difficulty === 'easy') {
        gridSize = 4;
        subGridSize = 2;
    } else if (difficulty === 'medium') {
        gridSize = 6;
        subGridSize = 2;
    } else {
        gridSize = 9;
        subGridSize = 3;
    }

    const board = document.createElement('div')
    board.className='sudoku-board';
    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    board.style.maxWidth = `${gridSize * 40}px`;

    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.className = 'sudoku-row'
        for (let j = 0; j < gridSize; j++){
            const cell = document.createElement('input')
            cell.type = 'number';
            cell.className=`sudoku-cell ${difficulty}`;
            cell.min='1';
            cell.max=`${gridSize}`;
            cell.value=''
            row.appendChild(cell)
        }
        board.appendChild(row)
    }
    return board
}



function resetBoard(){
    const cells = document.querySelectorAll('.sudoku-cell');
    cells.forEach(cell =>cell.value = '')
}