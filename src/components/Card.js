import React from 'react'

export function Card({imageSrc, content}) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={imageSrc} />
      <div className="card-body">
        <p className="card-text">
          {content}
        </p>
      </div>
    </div>
  )
}