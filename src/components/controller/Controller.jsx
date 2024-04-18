import React from 'react'
import s from './Controller.module.css'

export default function Controller({
  onStartStop,
  onReset,
  isRunning,
  isResettable,
  generation,
  onRandom,
}) {
  return (
    <div className={s.controller}>
      <div className={s.title}>
        <img src="/logo.svg" alt="Logo" />
        <div>
          <h3>Conway's Game of Life</h3>
          <p>Quest: life's equilibrium</p>
        </div>
      </div>
      <button className={s.button} onClick={onRandom}>
        Random
      </button>
      {isResettable && <button className={s.button} onClick={onStartStop}>
        {isRunning ? 'Pause' : 'Play'}
      </button>}
      {isResettable && (
        <button className={s.button} onClick={onReset}>
          Reset
        </button>
      )}
      {isRunning && <p className={s.generation}>Generation: {generation}</p>}
    </div>
  )
}
