import { useEffect, useState } from 'react'
import './App.css'
import Grid from './components/grid/Grid'
import { generateEmptyGrid, generateRandomGrid, nextGeneration } from './utils/gridUtils'
import Controller from './components/controller/Controller'
import Footer from './components/ui/footer/Footer'
import SizeSetter from './components/ui/grid-size-setter/SizeSetter'

function App() {
  const [grid, setGrid] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [generation, setGeneration] = useState(0)
  const [{ rows, cols }, setRowsCols] = useState({ rows: 20, cols: 45 })
  

  useEffect(() => {
    setGrid(generateEmptyGrid(rows, cols))
  }, [rows, cols])

  useEffect(() => {
    let intervalId

    if (isRunning) {
      intervalId = setInterval(() => {
        setGrid((prevGrid) => nextGeneration(prevGrid))
        setGeneration((prevGeneration) => prevGeneration + 1)
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [isRunning])

  const handleStopStart = () => {
    setIsRunning(!isRunning)
  }

  const handleReset = () => {
    setGrid(generateEmptyGrid(rows, cols))
    setGeneration(0)
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
        generation={generation}
        onRandom={handleRandom}
    
      />
      <Grid grid={grid} toggleCell={toggleCell} />
      <SizeSetter defaultSize={{ rows, cols }} gridSizeSetter={setRowsCols} />
      <Footer />
    </div>
  )
}

export default App
