import 'whatwg-fetch'

const quoteUrl = "https://4ozc0qiiec.execute-api.us-east-1.amazonaws.com/prod/quote";

export function requestQuote() {
  return fetch(quoteUrl)
}
