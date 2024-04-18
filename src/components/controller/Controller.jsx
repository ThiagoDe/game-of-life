import React from 'react'
import s from './Controller.module.css'

export default function Controller({
  onStartStop,
  onReset,
  isRunning,
  generation,
  onRandom,
}) {
  return (
    <div className={s.controller}>
      <img src="/logo.svg" alt="Logo" />
      <button className={s.button} onClick={onStartStop}>
        {isRunning ? 'Pause' : 'Play'}
      </button>
      <button className={s.button} onClick={onReset}>
        Reset
      </button>
      <button className={s.button} onClick={onRandom}>
        Random
      </button>
      <p className={s.generation}>Generation: {generation}</p>
    </div>
  )
}
