import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <div className="nav">
         <h3>Logo</h3>
         <ul className="nav-list">
              <Link to='/'>Home</Link>
              <Link to='/products'>Products</Link>
              <Link to='/about'>About</Link>
         </ul>
    </div>
  )
}
