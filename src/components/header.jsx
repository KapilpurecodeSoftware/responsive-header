import React from 'react'
import logo from "../assets/pureCodeImg.png"
import "./header.css"

export default function Header() {
  return (
    <body>
        <nav>
            <input type="checkbox" id='check' />
            <label htmlFor="check">
                <i className="fas fa-bars" id='btn'></i>
                <i class="fas fa-times" id='cancel'></i>
            </label>
            <img src={logo}></img>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About </a></li>
                <li><a href='#'>Service</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Feedback</a></li>
            </ul>
        </nav>
    </body>
  )
}


