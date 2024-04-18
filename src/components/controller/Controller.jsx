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
    <div className={s['controller-container']}>
      <div className={s.controller}>
        <div className={s.title}>
          <img src="/logo.svg" alt="Logo" />
          <div>
            <div>CONWAY'S GAME OF LIFE</div>
          </div>
        </div>
        <div className={s.buttons}>
          <button className={s.button} onClick={onRandom}>
            RANDOM
          </button>
          <button
            disabled={!isResettable}
            className={s.button}
            onClick={onStartStop}
          >
            {isRunning ? 'PAUSE' : 'PLAY'}
          </button>
          {isResettable && (
            <button className={s.button} onClick={onReset}>
              RESET
            </button>
          )}
        </div>
        {isRunning && <p className={s.generation}>Generation: {generation}</p>}
      </div>
    </div>
  )
}
