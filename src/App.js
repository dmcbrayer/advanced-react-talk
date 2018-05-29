import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './utils/context'
import Render from './render'
import HOC from './hoc'

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
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>Datastore Connections</h3>
          <HOC.QuoteSubscriber />
          <HOC.FakeQuoteSubscriber />
          <Render.QuoteSubscriber
            render={(quote) => (
              <h1>{quote}</h1>
            )}
          />

          <hr />

          <h3>Conditional Rendering</h3>
          <Render.ConditionalRenderer
            test={false}
            render={() => (
              <h1>This component should be conditionally rendered</h1>
            )}
          />
          <Render.ConditionalRendererWithDefault
            test={true}
            defaultComponent={() => (
              <h1>This is the default component</h1>
            )}
            render={() => (
              <h1>This component should be conditionally rendered</h1>
            )}
          />
        </div>

        <hr />

        <h3>Context Subscription</h3>
        <HOC.CurrentUserSubscriber />
      </ContextProvider>
    );
  }
}

export default App;
