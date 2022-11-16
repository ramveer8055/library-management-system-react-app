import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import '../styles/BookLists.css'
import { useLocation } from 'react-router-dom'
import { HiThumbDown } from 'react-icons/hi'

const BookLists = (props) => {
  let location = useLocation()
  let [books, setBooks] = useState([])
  useEffect(() => {
    let fetchBooks = async () => {
      let response = await fetch("http://localhost:1000/books");
      let resp = await response.json()
      setBooks(resp);
    }
    fetchBooks();
  }, [])

  const handleDeleteBook = async (id) => {

    fetch(`http://localhost:1000/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(books)
    });

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    swal({
      text: "Deleted the book !",
      icon: "success",
      button: "Aww yiss!",
    });
    await sleep(1000);
    window.location.reload()  //reload the page
  }

  const handleNotInterestedBook = (id) => {
    props.setProgress(50)
    setBooks(books.filter(book => book.id !== id))
    props.setProgress(100)
  }

  return (
    <div>
      <h1>BookLists</h1>
      <div>
        <div className="grid-container">
          {
            books.map((book) => (
              <div className="grid-item" key={book.id}>
                <div>
                  <p className='id'>{book.id}</p>
                  <p>Name: {book.name}</p>
                  <p>Genere: {book.genre}</p>
                  <p>Author: {book.author}</p>
                  <p>Rating: {book.rating}</p>
                  <p>Edition: {book.edition}</p>
                  <p>Language: {book.language}</p>
                </div>
                {location.pathname === '/admin-portal/book-lists' && <button className='delete-btn' onClick={() => handleDeleteBook(book.id)}>Delete</button>}
                {location.pathname === '/user-portal/book-lists' && <button className='delete-btn' style={{ background: "#00acee" }} onClick={() => handleNotInterestedBook(book.id)}><HiThumbDown /></button>}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BookLists