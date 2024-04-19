import React from 'react'
import s from './Controller.module.css'

export default function Controller({
  onStartStop,
  onReset,
  isRunning,
  isResettable,
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
          {isResettable && (
            <button className={s.button} onClick={onReset}>
              RESET
            </button>
          )}
          <button
            disabled={!isResettable}
            className={s.button}
            onClick={onStartStop}
          >
            {isRunning ? 'PAUSE' : 'PLAY'}
          </button>
        </div>
      </div>
    </div>
  )
}
