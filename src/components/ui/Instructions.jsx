import React from 'react'
import Cell from '../cell/Cell'

export default function Instructions({ generation, isRunning, handleRandom}) {
  return (
    <div className="instructions-container">
      <div className="instructions">
        {isRunning ? (
          <p className=".generation">Generation: {generation}</p>
        ) : (
          <>
            <p>Set initial state and play</p>
            <p className="arrow-button" onClick={handleRandom}>
              Generate random grid {' →'}
            </p>
          </>
        )}
        <div className="cell-info">
          <p>Dead </p>
          <Cell isAlive={false} />
          <p> Alive </p>
          <Cell isAlive={true} />
        </div>
      </div>
    </div>
  )
}
