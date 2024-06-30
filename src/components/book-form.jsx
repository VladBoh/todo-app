import { useState } from 'react'
import { BookList } from './book-list'
import './css/book-form.css';

export function BookForm() {
    const [bookList, setBookList] = useState([]);

    const [bookTitle, setBookTitle] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(bookTitle.trim()){
        const newBook = {
            name: bookTitle,
            id: Math.random() * 1124,
        };
        setBookList([...bookList ,  newBook])
        setBookTitle(''); 
        }
      };

    return (
        <form className='book-form' onSubmit={handleSubmit}>
        <h1>Створіть свій список книг!</h1>
        <div className='div'>
        <input className='input-name'
             type="text"
             placeholder="Введіть назву книги"
             value={bookTitle}
             onChange={(e) => setBookTitle(e.target.value)}
             />
            <button className='book-add-btn' type="submit">+</button>
        </div>
            <BookList books={bookList}  setBookList={setBookList}/>
        </form>
      )
}