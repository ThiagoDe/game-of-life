import React, { useState } from 'react'
import s from './SizeSetter.module.css'

export default function SizeSetter({ defaultSize, gridSizeSetter }) {
    const [rows, setRows] = useState(defaultSize.rows)
    const [cols, setCols] = useState(defaultSize.cols)
  return (
    <div className={s['size-container']}>
      <div className={s['size-setter']}>
        <div>
          <label htmlFor="rows">Rows:</label>
          <input
            onChange={(e) => setRows(Number(e.target.value))}
            type="number"
            id="rows"
            value={rows}
          />
        </div>
        <div>
          <label htmlFor="cols">Cols:</label>
          <input
            onChange={(e) => setCols(Number(e.target.value))}
            type="number"
            id="cols"
            value={cols}
          />
        </div>
        <button
          onClick={() => {
            gridSizeSetter({ rows, cols })
            console.log(rows, cols)
        }}
          className={s.button}
        >
          Set
        </button>
      </div>
    </div>
  )
}
