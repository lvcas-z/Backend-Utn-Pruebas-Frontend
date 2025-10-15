import React from 'react'
import { Link } from 'react-router'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='nav-links'>
                    <li className='nav-link'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className='nav-link register-link'>
                        <Link to="/register">Registrate</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header