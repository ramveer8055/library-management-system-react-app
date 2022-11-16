import React, { useState } from 'react'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"
import UserHome from './UserHome'
import About from './About'
import BookLists from '../admin/BookLists'
import LoadingBar from 'react-top-loading-bar'

const UserPortal = () => {
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Navbar>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path='/' element={<UserHome />} />
          <Route path='/about' element={<About />} />
          <Route path='/book-lists' element={<BookLists setProgress={setProgress} />} />
        </Routes>
      </Navbar>
    </div>
  )
}

export default UserPortal