import React, { Component } from 'react';
import { requestQuote } from '../utils/api'

function withFakeQuoteSubscription(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        quote: null
      }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          quote: "Guy Fieri did not say this."
        })
      }, 1000)
    }

    render() {
      return <WrappedComponent quote={this.state.quote} {...this.props} />
    }
  }
}

function withQuoteSubscription(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        quote: null
      }
    }

    componentDidMount() {
      requestQuote()
        .then(resp => resp.json())
        .then(json => {
          this.setState({
            quote: json.quote
          })
        });
    }

    render() {
      return <WrappedComponent quote={this.state.quote} {...this.props} />
    }
  }
}

class QuoteDisplay extends Component {
  render() {
    return (
      <h1>{this.props.quote}</h1>
    )
  }
}

export const QuoteSubscriber = withQuoteSubscription(QuoteDisplay)
export const FakeQuoteSubscriber = withFakeQuoteSubscription(QuoteDisplay)
