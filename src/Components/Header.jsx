import React from 'react'
import "./Header.css"

import { Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header>
        <div className='navcontainer'>
        <ul>
            <li><Link to="/products">Products</Link></li>
            
            <li><Link to="/about">About</Link></li>
        </ul>
        </div>
      </header>
    </>
  )
}

export default Header
