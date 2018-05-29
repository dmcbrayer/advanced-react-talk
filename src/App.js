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
            <HOC.QuoteSubscriber />
            <HOC.FakeQuoteSubscriber />
            <Render.QuoteSubscriber
              render={(quote) => (
                <Quote message={quote} />
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
              defaultComponent={() => <DefaultCard />}
              render={() => <Card imageSrc="https://via.placeholder.com/350x200" content="This is some content" />}
            />

            <hr />

            <h3>Context Subscription</h3>
            <HOC.CurrentUserSubscriber />
          </div>
        </div>
      </ContextProvider>
    );
  }
}

export default App;
