import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Render from './render'
import HOC from './hoc'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HOC.QuoteSubscriber />
        <HOC.FakeQuoteSubscriber />
        
        <Render.QuoteSubscriber
          render={(quote) => (
            <h1>{quote}</h1>
          )}
        />
        
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
    );
  }
}

export default App;
