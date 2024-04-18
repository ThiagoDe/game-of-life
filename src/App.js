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
import Footer from './components/ui/footer/Footer'
import SizeSetter from './components/ui/grid-size-setter/SizeSetter'
import Instructions from './components/ui/Instructions'

function App() {
  const [grid, setGrid] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [generation, setGeneration] = useState(0)
  const [{ rows, cols }, setRowsCols] = useState({ rows: 20, cols: 45 })

  // Memoized nextGeneration function
  const memoizedNextGeneration = useMemo(() => nextGeneration, [])

  // Debounced setRowsCols function
  const debounceSetRowsCols = useCallback(
    debounce((newSize) => {
      setRowsCols(newSize)
    }, 300),
    []
  )

  // Resettable condition
  const isResettable =
    grid.length && (rows !== 20 || cols !== 45 || !isGridEmpty(grid))

  useEffect(() => {
    setGrid(generateEmptyGrid(rows, cols))
  }, [rows, cols])

  useEffect(() => {
    let intervalId

    if (isRunning) {
      intervalId = setInterval(() => {
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
  }

  const handleRandom = () => {
    setGrid(generateRandomGrid(rows, cols))
    setGeneration(0)
  }

  const toggleCell = (row, col) => {
    const newGrid = [...grid]
    newGrid[row][col] = !newGrid[row][col]
    setGrid(newGrid)
  }

  return (
    <div className="App">
      <Controller
        onStartStop={handleStopStart}
        onReset={handleReset}
        isRunning={isRunning}
        isResettable={isResettable}
        generation={generation}
        onRandom={handleRandom}
      />
      <main className="main">
        <Grid grid={grid} toggleCell={toggleCell} />
        {!isRunning && (
          <SizeSetter
            defaultSize={{ rows, cols }}
            gridSizeSetter={debounceSetRowsCols}
          />
        )}
       {!isRunning && (<Instructions />)}
      </main>

    </div>
  )
}

export default App
