import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
        <div className="container">
        <Link to="/" className="brand-logo">TOKYO TOWER</Link>
        <ul className="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Tiers">Fun Fact #1</Link></li>
        <li><Link to="/Paris">Fun Fact #2</Link></li>
        <li><NavLink to="/Paint">Fun Fact #3</NavLink></li>

        </ul>

        </div>

        </nav>
    )
}

export default Navbar