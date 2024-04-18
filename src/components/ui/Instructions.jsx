import React from 'react'
import Cell from '../cell/Cell'

export default function Instructions() {
  return (
    <div className="instructions-container">
      <div className="instructions">
        <p>Set initial state and play</p>
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
