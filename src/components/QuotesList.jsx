import PropTypes from 'prop-types';
import QuotesItem from "./QuoteItem";

function QuotesList ({quotes}) {

  const htmlQuotes = quotes.map((quote, index) => {
    <li key = {index} className='phrases__card'>
        <QuotesItem
         phrase = {quote.quote}
         character = {quote.character}
        />
    </li>
  })

    return (
        <ul className='phrases__list'>
          {htmlQuotes}
        </ul>
    );
}

QuotesList.propTypes = {
  quotes: PropTypes.array
}

export default QuotesList;