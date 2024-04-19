import React, { useState } from 'react'
import s from './SizeSetter.module.css'

export default function SizeSetter({ defaultSize, gridSizeSetter }) {
  const [rows, setRows] = useState(defaultSize.rows)
  const [cols, setCols] = useState(defaultSize.cols)
  const [errorMsg, setErrorMsg] = useState(false)

  const handleRowChange = (e) => {
    const value = Number(e.target.value)
    setErrorMsg(false)
    if (value > 150 || value < 4) {
      setErrorMsg(true)
    }
    setRows(parseInt(value, 10))
  }

  const handleColChange = (e) => {
    const value = Number(e.target.value)
    setErrorMsg(false)
    if (value > 150 || value < 4) {
      setErrorMsg(true)
    }
    setCols(value)
  }
  const handleSizeSetter = () => {
    const validRows = Math.max(4, Math.min(rows, 150))
    const validCols = Math.max(4, Math.min(cols, 150))
    setRows(validRows)
    setCols(validCols)
    gridSizeSetter({ rows: validRows, cols: validCols })
  }

  return (
    <div className={s['size-container']}>
      <div className={s['size-setter']}>
        <div>
          <label htmlFor="rows">Rows:</label>
          <input
            onChange={handleRowChange}
            type="number"
            id="rows"
            value={rows || null}
          />
        </div>
        <div>
          <label htmlFor="cols">Cols:</label>
          <input
            onChange={handleColChange}
            type="number"
            id="cols"
            value={cols || null}
          />
        </div>
        <button
          onClick={() => {
            handleSizeSetter()
          }}
          className={s.button}
        >
          SET
        </button>
      </div>
      {errorMsg && <p className={s.error}>Choose a number between 4 and 150</p>}
    </div>
  )
}
