import React, { useState } from 'react'
import s from './SizeSetter.module.css'

export default function SizeSetter({ defaultSize, gridSizeSetter }) {
  const [rows, setRows] = useState(defaultSize.rows)
  const [cols, setCols] = useState(defaultSize.cols)
  const [errorMsg, setErrorMsg] = useState(false)

  const handleRowChange = (e) => {
    const value = Number(e.target.value)
    if (value > 150) {
      setErrorMsg(true)
      setRows(150)
      return
    }
    if (value <= 4) {
      setRows(4)
      setErrorMsg(true)
      return

    }
    setRows(value)
    setErrorMsg(false)
  }

    const handleColChange = (e) => {
      const value = Number(e.target.value)
      if (value > 150) {
        setErrorMsg(true)
        setCols(150)
        return
      }
      if (value <= 4) {
        setCols(4)
        setErrorMsg(true)
        return
      }
      setCols(value)
      setErrorMsg(false)
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
            value={rows}
            max={150}
            min={4}
          />
        </div>
        <div>
          <label htmlFor="cols">Cols:</label>
          <input
            onChange={handleColChange}
            type="number"
            id="cols"
            value={cols}
            max={150}
            min={4}
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
        {errorMsg && (<p className={s.error}>Chose a number between 4 and 150</p>)}
    </div>
  )
}
