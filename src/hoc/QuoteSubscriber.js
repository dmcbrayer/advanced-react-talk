import React, { Component } from 'react';
import { requestQuote } from '../utils/api'
import { Quote } from '../components/Quote'

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
      return <WrappedComponent message={this.state.quote} {...this.props} />
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
      return <WrappedComponent message={this.state.quote} {...this.props} />
    }
  }
}

export const QuoteSubscriber = withQuoteSubscription(Quote)
export const FakeQuoteSubscriber = withFakeQuoteSubscription(Quote)
