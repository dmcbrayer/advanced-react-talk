import React, { Component } from 'react'
import { UserContext } from '../utils/context'

function withCurrentUser(WrappedComponent) {
  return function ComponentWithUser(props) {
    return (
      <UserContext.Consumer>
        { user => <WrappedComponent user={user} {...props} />}
      </UserContext.Consumer>
    )
  }
}

function UserDisplay({user}) {
  return (
    <div>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
    </div>
  )
}

export const CurrentUserSubscriber = withCurrentUser(UserDisplay)