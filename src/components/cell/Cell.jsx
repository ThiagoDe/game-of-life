import React from 'react'
import s from './Cell.module.css'

export default function Cell({ isAlive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${s.cell} ${isAlive ? s.alive : s.dead}`}
    ></div>
  )
}
