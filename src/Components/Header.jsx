import React from 'react'
import "./Header.css"

import { Link, NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header>
        <div className='navcontainer'>
        <ul>
            <li><Link to="/products">Products</Link></li>
            
            <li><Link to="/about">About</Link></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
        </div>
      </header>
    </>
  )
}

export default Header
