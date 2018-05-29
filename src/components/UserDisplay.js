import React from 'react'

export function UserDisplay({user}) {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{user.name} <span className="badge badge-primary"> ID: {user.id}</span></h3>
      </div>
    </div>
  )
}