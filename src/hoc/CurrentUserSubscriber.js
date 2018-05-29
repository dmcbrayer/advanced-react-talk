import React, { Component } from 'react'
import { UserContext } from '../utils/context'
import { UserDisplay } from '../components/UserDisplay'

function withCurrentUser(WrappedComponent) {
  
}

export const CurrentUserSubscriber = withCurrentUser(UserDisplay)



















// function withCurrentUser(WrappedComponent) {
//   return function ComponentWithUser(props) {
//     return (
//       <UserContext.Consumer>
//         { user => <WrappedComponent user={user} {...props} /> }
//       </UserContext.Consumer>
//     )
//   }
// }

