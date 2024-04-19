import { useEffect, useState, useCallback, useMemo } from 'react'
import './App.css'
import Grid from './components/grid/Grid'
import {
  debounce,
  generateEmptyGrid,
  generateRandomGrid,
  isGridEmpty,
  nextGeneration,
} from './utils/gridUtils'
import Controller from './components/controller/Controller'
import SizeSetter from './components/ui/grid-size-setter/SizeSetter'
import Instructions from './components/ui/Instructions'

/**
 * Main application component.
 * Manages the simulation state and renders UI components.
 */
function App() {
  // State initialization
  const [grid, setGrid] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [generation, setGeneration] = useState(0)
  const [{ rows, cols }, setRowsCols] = useState({ rows: 20, cols: 45 })

  // Memoize the next generation function to avoid unnecessary re-computations
  const memoizedNextGeneration = useMemo(() => nextGeneration, [])

  // Debounce setting rows and columns to avoid rapid updates
  const debounceSetRowsCols = useCallback(
    debounce((newSize) => {
      setRowsCols(newSize)
    }, 300),
    []
  )

  // Resettable condition
  const isResettable =
    grid.length && (rows !== 20 || cols !== 45 || !isGridEmpty(grid))

  // Effect to initialize grid with empty cells when row or column count changes
  useEffect(() => {
    setGrid(generateEmptyGrid(rows, cols))
  }, [rows, cols])

  // Effect to reset grid when generation count changes and grid is empty in every cycle
  useEffect(() => {
    if (generation > 0) {
      if (isGridEmpty(grid)) {
        handleReset()
      }
    }
  }, [generation])

  // Effect to control the simulation interval based on isRunning state
  useEffect(() => {
    let intervalId

    if (isRunning) {
      intervalId = setInterval(() => {
        // prevGrid ensures that we're updating the state based on the most recent state values
        setGrid((prevGrid) => memoizedNextGeneration(prevGrid))
        setGeneration((prevGeneration) => prevGeneration + 1)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [isRunning, memoizedNextGeneration])

  const handleStopStart = () => {
    setIsRunning(!isRunning)
  }

  const handleReset = () => {
    setGrid(generateEmptyGrid(rows, cols))
    setGeneration(0)
    setIsRunning(false)
    setRowsCols({ rows: 20, cols: 45 })
  }

  // Event handler to generate a random grid
  const handleRandom = () => {
    setGrid(generateRandomGrid(rows, cols))
    setGeneration(0)
  }

  // Function to toggle the state of a cell in the grid
  const toggleCell = (row, col) => {
    const newGrid = [...grid]
    newGrid[row][col] = !newGrid[row][col]
    setGrid(newGrid)
  }

  return (
    <div className="App">
      {/* Controller component */}
      <Controller
        onStartStop={handleStopStart}
        onReset={handleReset}
        isRunning={isRunning}
        isResettable={isResettable}
        generation={generation}
      />
      <main className="main">
        {/* Instructions component */}
        <Instructions
          isRunning={isRunning}
          generation={generation}
          handleRandom={handleRandom}
        />
        {/* Grid component */}
        <Grid grid={grid} toggleCell={toggleCell} />
        {!isRunning && (
          <SizeSetter
            defaultSize={{ rows, cols }}
            gridSizeSetter={debounceSetRowsCols}
          />
        )}
      </main>
    </div>
  )
}

export default App
