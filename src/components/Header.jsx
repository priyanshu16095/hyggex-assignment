import React from 'react'
import './style.css'

function Header() {
  return (
    <div className='header flex-s'>
        <a href="https://www.hyggexworld.com/" target='_blank'><img src="Component-3.png" width={'160rem'} /></a>
        <div className="header__links flex-h">
            <p className="link pointer">Home</p>
            <p className="link pointer">Flashcard</p>
            <p className="link pointer">Contact</p>
            <p className="link pointer">FAQ</p>
            <button className='loginButton'>Login</button>
        </div>
    </div>
  )
}

export default Header
