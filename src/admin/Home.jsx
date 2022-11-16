import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className='admin-user'>
        <div>
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
        </div>
        <div className='admin-user-login'><Link to="/admin-login" className='button'>Admin Login</Link></div>
      </div>

      <div className='admin-user'>
        <div>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        </div>
        <div className='admin-user-login'><Link to="/user-login" className='button'>User Login</Link></div>
      </div>
    </section>
  )
}

export default Home