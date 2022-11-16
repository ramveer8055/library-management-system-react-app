import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'

const UserLists = () => {
  
  let [users, setUsers] = useState([])
  useEffect(() => {
    let fetchUsers = async () => {
      let response = await fetch("http://localhost:1000/users");
      let resp = await response.json()
      setUsers(resp);
    }
    fetchUsers();
  }, [])

  const handleDeleteUser = async (id) => {
    fetch(`http://localhost:1000/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    });

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    swal({
      text: "Deleted the user !",
      icon: "success",
      button: "Aww yiss!",
    });
    await sleep(1000);
    window.location.reload();
  }
  return (
    <div>
      <h1>UserLists</h1>
      <div>
        <div className="grid-container">
          {
            users.map((user) => (
              <div className="grid-item" key={user.id}>
                <div>
                  <p className='id'>{user.id}</p>
                  <p>Name: <span>{user.name}</span></p>
                  <p>Phone: <span>{user.phone}</span></p>
                  <p>Email: <span>{user.email}</span></p>
                  <p>Date of Birth: <span>{user.dob}</span></p>
                  <p>Address: <span>{user.address}</span></p>
                </div>
                <button className='delete-btn' onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default UserLists