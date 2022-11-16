import React, { useState } from 'react'
import '../styles/Sidebar.css'
import { NavLink } from 'react-router-dom'
import { FaUsers, FaHouseDamage, FaList, FaUserPlus } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { SlNotebook } from "react-icons/sl";

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin-portal/dashboard",
      name: "Dashboard",
      icon: <FaHouseDamage />
    },
    {
      path: "/admin-portal/book-lists",
      name: "BookLists",
      icon: <FaList />
    },
    {
      path: "/admin-portal/add-book",
      name: "Add Book",
      icon: <SlNotebook />
    },
    {
      path: "/admin-portal/user-lists",
      name: "User Lists",
      icon: <FaUsers />
    },
    {
      path: "/admin-portal/add-user",
      name: "Add User",
      icon: <FaUserPlus />
    },
    {
      path: "/",
      name: "Logout",
      icon: <MdLogout />
    }
  ]
  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div style={{ display: isOpen ? "block" : "none" }} className='logo'>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" className="logo-img" />
            <p>{props.user.email}</p>
          </div>
          <div style={{ marginLeft: isOpen ? "10px" : "0px" }} className="bars">
            {!isOpen && < BsFillArrowRightCircleFill onClick={toggle} />}
            {isOpen && < BsFillArrowLeftCircleFill onClick={toggle} />}
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
        {/* <div className="icon">L</div>
        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
          <button className="link_text">Logout</button>
        </div> */}
      </div>
      <main style={{ marginLeft: isOpen ? "250px" : "50px" }} >{props.children}</main>
    </div>
  )
}

export default Sidebar