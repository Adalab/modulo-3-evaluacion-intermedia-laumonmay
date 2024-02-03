import { useState } from 'react';
import Header from './Header';
import Filter from './Filter';
import QuotesList from './QuotesList';

import '../scss/App.scss';
import dataquotes from '../data/quotes.json';


function App() {
  const [quotes] = useState (dataquotes);

  const [filterPhrase, setFilterPhrase] = useState ('');

  const handleFilterPhrase = (filterValue) => {
    setFilterPhrase(filterValue);
  }

  const filteredQuotes = quotes.filter(quote => quote.quotes.includes(filterPhrase))

  return (
    <div className='app'>
      <Header/>
      <main className='main'>
        <Filter handleFilterPhrase={handleFilterPhrase}/>
        <QuotesList quotes= {filteredQuotes}/>
      </main>
    </div>
  )
}

export default App;
