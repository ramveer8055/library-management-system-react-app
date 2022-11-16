import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <h3>Digital Library</h3>
                </div>
                <div className="links">
                    <ul>
                        {/* <li><Link to="/user-portal">Home</Link></li> */}
                        <li><Link to="/user-portal/book-lists">Digital Book</Link></li>
                        {/* <li><Link to="/user-portal/about">About</Link></li> */}
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
            </div>
            <main>{props.children}</main>
        </div>
    )
}

export default Navbar