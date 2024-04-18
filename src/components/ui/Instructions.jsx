import React from 'react'
import Cell from '../cell/Cell'

export default function Instructions() {
  return (
    <div className="instructions-container">
      <div className="instructions">
        <p>Begin setting the size of you grid of cells</p>
        <div className="cell-info">
          <p>Click any cells to make them dead </p>
          <Cell isAlive={false} />
          <p> or alive </p>
          <Cell isAlive={true} />
        </div>
        <p>
          Decide which cells are alive and which are dead to start the game.
        </p>
        <p>You can randomly an initial configuration generate Random button </p>
        <p>Begin the game by clicking "Play" and witness the cells evolve.</p>
      </div>
    </div>
  )
}
