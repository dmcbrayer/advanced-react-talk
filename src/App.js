import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './utils/context'
import Render from './render'
import HOC from './hoc'
import { Quote } from './components/Quote'
import { DefaultCard } from './components/DefaultCard'
import { Card } from './components/Card'

export const UserContext = React.createContext({ id: 1, name: 'Anonymous User'})

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="container">
            <h3>Datastore Connections</h3>

            <hr />

            <h3>Conditional Rendering</h3>

            <hr />

            <h3>Context Subscription</h3>
          </div>
        </div>
      </ContextProvider>
    );
  }
}

export default App;
