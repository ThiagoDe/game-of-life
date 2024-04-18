import React from 'react'
import Cell from '../cell/Cell'
import s from './Grid.module.css'

export default function Grid({ grid, toggleCell }) {
  if (!grid) {
    return <div>Loading...</div>
  }
  return (
   
      <div className={s.grid}>
        {grid.map((row, i) => (
          <div key={i} style={{ display: 'flex' }}>
            {row.map((cell, j) => (
              <Cell
                key={`${i} - ${j}`}
                isAlive={cell}
                onClick={() => toggleCell(i, j)}
              />
            ))}
          </div>
        ))}
      </div>
    
  )
}
