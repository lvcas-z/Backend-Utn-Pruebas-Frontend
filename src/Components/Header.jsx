import React, { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../Context/AuthContext'
import './Header.css'

const Header = () => {
    const { isLogged, onLogout } = useContext(AuthContext)

    return (
        <header>
            <nav>
                <ul className='nav-links'>
                    <li className='nav-link'>
                        <Link to="/">Home</Link>
                    </li>
                    {/* Si NO está logueado */}
                    {!isLogged && (
                        <>
                            <li className='nav-link'>
                                <Link to="/login">Login</Link>
                            </li>
                            <li className='nav-link nav-especial-link'>
                                <Link to="/register">Registrate</Link>
                            </li>
                        </>
                    )}

                    {/* Si está logueado */}
                    {isLogged && (
                        <li className='nav-link nav-especial-link'>
                                <Link onClick={onLogout}>Cerrar Sesion</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header
