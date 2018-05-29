import { QuoteSubscriber, FakeQuoteSubscriber } from './QuoteSubscriber'
import { CurrentUserSubscriber } from './CurrentUserSubscriber'

const HOC = {
  QuoteSubscriber: QuoteSubscriber,
  FakeQuoteSubscriber: FakeQuoteSubscriber,
  CurrentUserSubscriber: CurrentUserSubscriber
}

export default HOC
