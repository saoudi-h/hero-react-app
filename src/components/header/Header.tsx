import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <Link to="/home">Accueil</Link>
                <Link to="/heros">Heros</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header