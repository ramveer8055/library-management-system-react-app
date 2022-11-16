import React, { useState } from 'react'
import '../styles/AddBook.css'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
const AddBook = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [language, setLanguage] = useState('')
  const [rating, setRating] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name && !genre && !language && !rating) {
      swal({
        title: "Please!",
        text: "Fill the all the field !",
        icon: "info",
        button: "Aww yiss!",
        dangerMode: true,
      });
    } else {
      let data = {
        name,
        genre,
        language,
        rating
      };
      fetch("http://localhost:1000/books", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      swal(name, "Book! successfully added", "success");
      setName('')
      setGenre('')
      setLanguage('')
      setRating('')
      navigate('/admin-portal/book-lists')
    }
  }
  const handleReset = () => {
    setName('')
    setGenre('')
    setLanguage('')
    setRating('')
  }
  return (
    <div>
      <h1>AddBook</h1>
      <div className="add-book-container">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="title">
            Book's Name
            <input placeholder="Book's Name" onChange={(e) => { setName(e.target.value) }} value={name} type="text" name="title" id="title" />
          </label>
          <label htmlFor="author">
            Book's Author
            <input placeholder="Book's Author Name" onChange={(e) => { setName(e.target.value) }} value={name} type="text" name="author" id="author" />
          </label>

          <label htmlFor="genre">
            Genere
            <input placeholder='Genere' onChange={(e) => { setGenre(e.target.value) }} value={genre} type="text" name="genre" id="genre" />
          </label>
          <label htmlFor="language">
            Languague
            <input placeholder='Language' onChange={(e) => { setLanguage(e.target.value) }} value={language} type="text" name="language" id="language" />
          </label>
          <label htmlFor="rating">
            Rating
            <input placeholder='Rating' onChange={(e) => { setRating(e.target.value) }} value={rating} type="number" min="2" max="5" name="rating" id="rating" />
          </label>
          <div className='add-books-btn-container'>
            <button className='btn-add-fav' style={{ marginRight: "15px" }} >Submmit</button>
            <button className='btn-add-fav' type="reset" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBook