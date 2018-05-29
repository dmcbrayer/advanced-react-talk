import React from 'react'

export function Quote({message}) {
  return (
    <blockquote className="quote blockquote">
      <p className="mb-0">{message}</p>
      <footer className="blockquote-footer">Guy Fieri</footer>
    </blockquote>
  )
}