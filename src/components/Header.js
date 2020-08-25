import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <div className="header">
        <ul>
            <li>
                <NavLink to="/">AllSongs</NavLink>
            </li>
            <li>
                <NavLink to="/playlist">PlayList</NavLink>
            </li>
        </ul>
    </div>
)

export default Header;