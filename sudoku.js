let puzzles1 = {
    easy: {
        initial: [
            [1, 0, 0, 0],
            [0, 0, 3, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 4]
        ],
        solution: [
            [1, 3, 4, 2],
            [2, 4, 3, 1],
            [4, 2, 1, 3],
            [3, 1, 2, 4]
        ],
        grids:[
            [1,3,2,4],
            [4,2,3,1],
            [4,2,3,1],
            [1,3,2,4]
        ]
    },
    medium: {
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
    },
    hard: {
        initial: [
            [0, 0, 0, 0, 0, 0, 0, 9, 0],
            [0, 0, 0, 0, 0, 8, 0, 0, 0],
            [0, 0, 0, 7, 0, 0, 0, 0, 0],
            [0, 6, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 5, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 6],
            [0, 0, 0, 0, 0, 7, 0, 0, 0],
            [0, 8, 0, 0, 0, 0, 0, 0, 0]
        ],
        solution: [
            [1, 3, 7, 6, 2, 5, 4, 9, 8],
            [4, 2, 9, 1, 6, 8, 7, 5, 3],
            [8, 5, 6, 7, 3, 9, 2, 1, 4],
            [9, 6, 3, 4, 7, 1, 5, 2, 8],
            [7, 1, 2, 8, 5, 6, 9, 4, 3],
            [5, 4, 8, 2, 9, 3, 6, 7, 1],
            [2, 9, 4, 3, 1, 8, 7, 6, 5],
            [3, 7, 5, 9, 8, 2, 1, 4, 6],
            [6, 8, 1, 5, 4, 7, 3, 8, 9]
        ]
    }
};


let solutionVisible = false;

function showSolution(difficulty) {
    const board = document.querySelector('.sudoku-board');
    const cells = board.querySelectorAll('input');

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
    let solutions = []
    cells.forEach((cell, index) => {
        const row = Math.floor(index / gridSize);
        // console.log("ROW", row)
        const col = index % gridSize;
        // console.log('col', col)
        // console.log(difficulty)
        const value = puzzles1[difficulty].solution[row][col];
        

        if (!cell.readOnly) {
            const solutionCell = document.createElement('input');
            solutionCell.type = 'number';
            solutionCell.id = 'solution';
            solutionCell.className=`sudoku-cell ${difficulty}`;
            solutionCell.value = value;
            solutionCell.readOnly = true;
            // solutionCell.style.position = 'absolute';
            solutionCell.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            // cell.parentNode.appendChild(solutionCell);
        }

    });

    // board.appendChild()

   let solutionTable = puzzles1[difficulty].solution
   console.log(solutionTable)

//    const board = document.createElement('div')
    // board.className='sudoku-board';
    // board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    // board.style.maxWidth = `${gridSize * 40}px`;

    // const grid = document.createElement('div')
    // grid.id = 'grid'

    // for(let i = 0; i < gridSize; i++){
    //     const row = document.createElement('div');
    //     row.className = 'sudoku-row'
    //     for (let j = 0; j < gridSize; j++){
    //         const cell = document.createElement('input')
    //         cell.type = 'number';
    //         cell.className=`sudoku-cell ${difficulty}`;
    //         cell.min='1';
    //         cell.max=`${gridSize}`;
    //         cell.value = solutionTable[i][j]
    //         // if (puzzle.initial && puzzle.initial[i] && puzzle.initial[i][j] !== 0) {
    //         //     cell.value=puzzle.initial[i][j]
    //         //     cell.readOnly = true;
    //         //     cell.classList.add('readonly');  // Optionally style read-only cells differently
    //         // }
    //         row.appendChild(cell)
  
    //     }
    //     board.appendChild(row)
    // }
    
    solutionVisible = true;
    document.getElementById('solution-toggle').textContent = 'Hide Solution';
    // return board
}

function hideSolution() {
    const solutionCells = document.querySelectorAll('#solution');
    solutionCells.forEach(cell => cell.remove());

    solutionVisible = false;
    document.getElementById('solution-toggle').textContent = 'Show Solution';
}




// document.addEventListener('DOMContentLoaded', () => {
const generateSudoku = ()=> {

    document.getElementById('app-name').innerText = 'Sudoku'

    const board = createSudokuBoard();

    const displayDiv = document.getElementById('display');
    displayDiv.appendChild(board)

    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML=""
    mapDiv.id = 'none'

    let placesCont;

    if(document.getElementById('places-cont')){
        placesCont = document.getElementById('places-cont')
        placesCont.innerHTML=""

    }


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

    const solutionToggleButton = document.createElement('button');
    solutionToggleButton.id = 'solution-toggle';
    solutionToggleButton.textContent = 'Show Solution';
    solutionToggleButton.addEventListener('click', () => {
        if (solutionVisible) {
            hideSolution();
        } else {
            const board = document.querySelector('.sudoku-board')
            showSolution(board.id);
        }
    });
    optionsDiv.appendChild(solutionToggleButton);
}
// })

function clearSudokuBoard(){
    const displayDiv = document.getElementById('display');
    displayDiv.innerHTML = ''
}

function loadSudoku(difficulty){
    clearSudokuBoard();

    const board = createSudokuBoard(difficulty)
    board.id=`${difficulty}`

    const displayDiv = document.getElementById('display');
    displayDiv.appendChild(board)
}


function createSudokuBoard(difficulty='easy'){

    clearSudokuBoard()

    

    const puzzle = puzzles1[difficulty];
    const initial = puzzle.initial


    let gridSize, subGridSize
    if (difficulty === 'easy') {
        gridSize = 4;
       
    } else {
        gridSize = 9;
        subGridSize = 3;
    }

    const board = document.createElement('div')
    board.className='sudoku-board';
    board.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    board.style.maxWidth = `${gridSize * 60}px`;

    // const grid = document.createElement('div')
    // grid.id = 'grid'

    // Loop over the array

    // grab out the grids. 
    // 00 01 02 03
    // 10 11 12 13
    // 20 21 22 23
    // 30 31 32 33

    // while (i < puzzle.)
    // let gridCount = 0;
    // while (gridCount >= gridSize){}
    let grids = [];

    if (gridSize == 9){
        const grid3 = document.createElement('div')
        grid3.id = "grid3"
        i = 0;
        let grid = [];
        while (i < subGridSize){
            let j = 0;
            while (j < subGridSize){
                grid.push(initial[i][j])
                j++
            }
            i++
            grids.push(grid)
        }

        console.log(grids)
        
    }
    
    

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
