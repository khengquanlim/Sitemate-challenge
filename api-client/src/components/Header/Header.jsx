import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEye, faEdit, faHome } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <header className="header sticky">
            <h1>Welcome to Sitemate Challenge!</h1>
            <nav>
                <Link to="/"><FontAwesomeIcon icon={faHome} className="icon-spacing" /> Home</Link>
                <Link to="/create"><FontAwesomeIcon icon={faPlus} className="icon-spacing" /> Create Item</Link>
                <Link to="/read"><FontAwesomeIcon icon={faEye} className="icon-spacing" /> Read Items</Link>
                <Link to="/update"><FontAwesomeIcon icon={faEdit} className="icon-spacing" /> Update Item</Link>
                <Link to="/delete"><FontAwesomeIcon icon={faTrash} className="icon-spacing" /> Delete Item</Link>
            </nav>
        </header>
    );
};

export default Header;