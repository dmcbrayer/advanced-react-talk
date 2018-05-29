import React, { Component } from 'react'

export const UserContext = React.createContext({ id: 1, name: 'Anonymous User' })

export class ContextProvider extends Component {
  render() {
    return (
      <UserContext.Provider value={{ id: 2, name: 'Daniel Mcbrayer' }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
