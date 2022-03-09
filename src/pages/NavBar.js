import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NavBar = () => {
    return (
    <nav>
        <Link to="/">Home</Link>|{" "}
        <Link to="about">AboutPage</Link>|{" "}
        <Link to="articles-list">Articles</Link>
    </nav>
    )
}
export default NavBar;