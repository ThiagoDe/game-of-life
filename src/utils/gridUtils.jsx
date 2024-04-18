export const generateEmptyGrid = (rows, cols) => {
  const grid = []
  for (let i = 0; i < rows; i++) {
    grid.push(Array.from(Array(cols), () => false))
  }
  return grid
}

export const generateRandomGrid = (row, col) => {
  const grid = []
  for (let i = 0; i < row; i++) {
    grid[i] = []
    for (let j = 0; j < col; j++) {
      grid[i][j] = Math.random() < 0.3
    }
  }
  return grid
}

export const nextGeneration = (grid) => {
  if (!grid || !grid.length || !grid[0].length) {
    return grid
  }
  const newGrid = []
  const rows = grid.length
  const cols = grid[0].length
  for (let i = 0; i < rows; i++) {
    newGrid[i] = []
    for (let j = 0; j < cols; j++) {
      const neighbors = countNeighbors(grid, i, j)
      if (grid[i][j]) {
        newGrid[i][j] = neighbors === 2 || neighbors === 3
      } else {
        newGrid[i][j] = neighbors === 3
      }
    }
  }
  return newGrid
}

const deltas = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
]

const countNeighbors = (grid, row, col) => {
  const rows = grid.length
  const cols = grid[0].length
  let count = 0
  deltas.forEach(([i, j]) => {
    const r = row + i
    const c = col + j
    if (r >= 0 && r < rows && c >= 0 && c < cols) {
      count += grid[r][c]
    }
  })
  return count
}


export function isGridEmpty(grid) {
  for (let row of grid) {
    for (let cell of row) {
      if (cell === true) {
        return false 
      }
    }
  }
  return true 
}

// Debounce utility function
export const debounce = (func, wait) => {
  let timeout
  return  (...args) => {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}