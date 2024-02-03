import { useState } from 'react';
import Header from './Header';
import Filter from './Filter';
import QuotesList from './QuotesList';

import '../scss/App.scss';
import dataquotes from '../data/quotes.json';


function App() {
  const [quotes, setQuotes] = useState (dataquotes);
  
  console.log(quotes)
  return (
    <div className='app'>
      <Header/>
      <main className='main'>
        <Filter/>
        <QuotesList quotes= {quotes}/>
      </main>
    </div>
  )
}

export default App
