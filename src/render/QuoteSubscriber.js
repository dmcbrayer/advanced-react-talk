import React, { Component } from 'react'
import { requestQuote } from '../utils/api'

export class QuoteSubscriber extends Component {
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
    return this.props.render(this.state.quote)
  }
}