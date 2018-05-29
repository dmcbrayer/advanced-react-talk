import React, { Component } from 'react';
import 'whatwg-fetch'

const quoteUrl = "https://4ozc0qiiec.execute-api.us-east-1.amazonaws.com/prod/quote";

function withQuoteSubscription(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        quote: null
      }
    }

    componentDidMount() {
      fetch(quoteUrl)
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
