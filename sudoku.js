const puzzles = {
    easy: {
        initial: [
            [1, 0, 0, 0],
            [0, 0, 3, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 4]
        ],
        solution: [
            [1, 4, 2, 3],
            [3, 1, 3, 2],
            [4, 2, 1, 3],
            [2, 3, 4, 1]
        ]
    },
    medium: {
        initial: [
            [0, 0, 0, 0, 1, 0],
            [0, 0, 5, 0, 0, 0],
            [0, 6, 0, 0, 0, 3],
            [0, 0, 0, 4, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0, 0]
        ],
        solution: [
            [2, 3, 4, 6, 1, 5],
            [1, 4, 5, 3, 2, 6],
            [3, 6, 2, 1, 5, 4],
            [5, 1, 6, 4, 3, 2],
            [4, 2, 3, 5, 6, 1],
            [6, 5, 1, 2, 4, 3]
        ]
    },
    hard: {
        initial: [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ],
        solution: [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 2, 3, 7, 5, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 6, 8, 2, 1, 7, 9]
        ]
    }
};



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


function createSudokuBoard(difficulty='easy'){

    // if(difficulty == undefined)

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

    // if the subGrid = 2, then

    const board = document.createElement('div')
    board.className='sudoku-board';
    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    board.style.maxWidth = `${gridSize * 40}px`;

    const grid = document.createElement('div')
    grid.id = 'grid'

    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.className = 'sudoku-row'
        for (let j = 0; j < gridSize; j++){
            const cell = document.createElement('input')
            cell.type = 'number';
            cell.className=`sudoku-cell ${difficulty}`;
            cell.min='1';
            cell.max=`${gridSize}`;
            cell.value = '';
            if (puzzle.initial && puzzle.initial[i] && puzzle.initial[i][j] !== 0) {
                cell.value=puzzle.initial[i][j]
                cell.readOnly = true;
                cell.classList.add('readonly');  // Optionally style read-only cells differently
            }
            row.appendChild(cell)
  
        }
        board.appendChild(row)
    }
    return board
}



function resetBoard() {
    const cells = document.querySelectorAll('.sudoku-cell');
    cells.forEach(cell => {
        if (!cell.readOnly) {  // Only reset values of cells that are not readonly
            cell.value = '';
        }
    });
}
