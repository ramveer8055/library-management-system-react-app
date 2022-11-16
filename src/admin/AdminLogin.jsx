import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/AdminLogin.css'
import swal from 'sweetalert'

const AdminLogin = (props) => {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === props.user.email && password === props.user.password) {
      navigate("/admin-portal/dashboard")
    } else {
      swal({
        title: "Invalid Credential!",
        text: "please enter a valid user name & password !",
        icon: "error",
        button: "Aww yiss!",
        dangerMode: true,
      });
    }
  }
  return (
    <div className='body-admin'>
      <div className='adminLogin'>
        <form onSubmit={handleSubmit} >
          <div className="imgcontainer">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
          </div>
          <div className="container-admin-login">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required="" onChange={(e) => setEmail(e.target.value)} value={email} />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required="" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin