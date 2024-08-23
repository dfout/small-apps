import './Sudoku.css'


function Sudoku(){
    const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill(0)));

    const handleInputChange = (row, col, value) => {
      // Update the grid state
      setGrid(prevGrid => {
        const newGrid = [...prevGrid];
        newGrid[row][col] = value;
        return newGrid;
      });
    };
  
    const solve = () => {
      // Implement the backtracking algorithm here
      const solvedGrid = solveSudoku(grid);
      setGrid(solvedGrid);
    };

    const renderBoard = () => {
        return grid.map((row, rowIndex) => (
            <div key={rowIndex} className='sudoku-row'>
                {row.map((cell,colIndex)=>(
                    <input 
                    key={colIndex}
                    type='number'
                    value={cell || ''}
                    onChange={(e)=> handleInputChange(rowIndex, colIndex, Number(e.target.value))}
                    className='sudoku-cell'
                    min="1"
                    max="9"
                    />
                ))}
            </div>
        )
    )}
  
    return (
      <div>
        <h2>Sudoku</h2>
        <button onClick={solve}>Solve</button>
        {renderBoard()}
      </div>
    );

}


export default Sudoku