import React from 'react'
import { Link } from 'react-scroll'
function Header() {
  return (
    <div id='main'>
      <div className="name">
        <h2>STEP UP YOUR</h2>
        <h1><span>FITNESS</span> WITH US</h1>
        <p className='details'>Experience the Benefits of Advanced Technology and Expert Care</p>
      <div className="header-btn">
        <Link to="contact" smooth ={true} duration={1000} className='header-btn'>
          BOOK NOW
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Header