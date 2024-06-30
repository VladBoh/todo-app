import React from 'react';
import './css/book-list.css';

export function BookList({ books, setBookList }) {

  const bookDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBookList(updatedBooks);
  };

  return (
    <div className="list-wrapper">
      <ul>
        {books.map(book => (
          <li className='list-item' key={book.id}>
          <div className='div-checkbox-name'>
          <input
              type="checkbox"
              className="scales"
            />
            <p>{book.name}</p>
          </div>
            <button className='delete-btn' onClick={() => bookDelete(book.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
