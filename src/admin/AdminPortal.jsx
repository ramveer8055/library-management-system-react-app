import React from 'react'
import '../styles/AdminPortal.css'
import { Routes, Route } from "react-router-dom"
import Sidebar from '../components/Sidebar'
import BookLists from './BookLists'
import AddBook from './AddBook'
import UserLists from './UserLists'
import AddUser from './AddUser'
import Dashboard from './Dashboard'

const AdminPortal = (props) => {
  return (
    <div>
      <Sidebar user={props.user}>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/book-lists' element={<BookLists />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/user-lists' element={<UserLists />} />
          <Route path='/add-user' element={<AddUser />} />
        </Routes>
      </Sidebar>
    </div>
  )
}

export default AdminPortal