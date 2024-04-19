import React from 'react'
import Cell from '../cell/Cell'

/**
 * Component for displaying instructions and game information.
 * Shows the current generation count, prompts for setting initial state or generating random state.
 */

export default function Instructions({ generation, isRunning, handleRandom}) {
  return (
    <div className="instructions-container">
      <div className="instructions">
        {isRunning ? (
          <p className="generation">Generation: {generation}</p>
        ) : (
          <div className='call-to-action'>
            <p>{`Set ${generation === 0 ? 'initial': ''} state manually or`}</p>
            <p className="arrow-button" onClick={handleRandom}>
              randomly {' →'}
            </p>
          </div>
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
