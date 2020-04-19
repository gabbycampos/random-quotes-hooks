import React, { useState, useEffect } from 'react';
import './App.css';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length); // from 0 to length of the data.quotes array
        let randomQuote = dataQuotes[randomNum];
        //console.log(randomQuote);
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  useEffect(() => {
    getQuote()
  }, []);

  const handleClick = () => {
    getQuote()
  }

  return (
    <div className="wrapper d-flex align-items-center justify-content-center">
      <div className="col-md-6 box p-3 rounded" id="quote-box">
        <div className="mb-4">
          <p className="quote">{quote}</p> <p className="author">- {author}</p>
        </div>
        <div className="d-flex justify-content-between">
          <a className="btn btn-sm btn-info" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text" rel="noopener noreferrer"target="_blank">tweet</a>
          <button onClick={handleClick} className="btn btn-sm btn-info">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
