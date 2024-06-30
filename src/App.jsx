import React, { useState } from 'react';
import { BookForm } from './components/book-form';
import { BookList } from './components/book-list';
import './assets/global.css';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <BookForm setBookList={setBooks} />
      <BookList books={books} setBookList={setBooks} /> 
    </div>
  );
}

export default App;