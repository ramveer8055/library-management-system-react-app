import React, { useState } from 'react'
import swal from 'sweetalert';
import '../styles/AddUser.css'
import { useNavigate } from 'react-router-dom'
const AddUser = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name && !phone && !email && !dob && !address) {
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
        phone,
        email,
        dob,
        address
      };
      fetch("http://localhost:1000/users", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      swal(name, "User! successfully added", "success");
      setName('')
      setPhone('')
      setEmail('')
      setDob('')
      setAddress('')
      navigate('/admin-portal/user-lists')
    }
  }
  const handleReset = () => {
    setName('')
    setPhone('')
    setEmail('')
    setDob('')
    setAddress('')
  }
  return (
    <div>
      <h1>AddUser</h1>

      <div className="add-user-container">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input placeholder="Name" onChange={(e) => { setName(e.target.value) }} value={name} type="text" name="name" id="name" />
          </label>
          <label htmlFor="phone">
            Phone No.
            <input placeholder="Phone No." onChange={(e) => { setPhone(e.target.value) }} value={phone} type="tel" name="phone" id="phone" />
          </label>

          <label htmlFor="email">
            Email
            <input placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" name="email" id="email" />
          </label>
          <label htmlFor="dob">
            <div>
              DOB
            </div>
            <input className='date-of-birth' placeholder='Date of Birth' onChange={(e) => { setDob(e.target.value) }} value={dob} type="date" name="dob" id="dob" />
          </label>
          <div>
            <label htmlFor="address">
              Address
              <input placeholder='Address' onChange={(e) => { setAddress(e.target.value) }} value={address} type="text" name="address" id="address" />
            </label>
          </div>

          <div className='add-user-btn-container'>
            <button className='btn-add-fav' style={{ marginRight: "15px" }} >Submmit</button>
            <button className='btn-add-fav' type="reset" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser