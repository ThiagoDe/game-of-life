import React from 'react'
import s from './Controller.module.css'

/**
 * Component for controlling the Game of Life simulation.
 * Allows starting, pausing, and resetting the simulation.
 */

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
            <p style={{fontSize: 'small'}}>2024 by Thiago Moura</p>
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

          {!isResettable && (
            <div className={`${s['box']} ${s['arrow-top']}`}>
              <div>Set initial state to play</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
