import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
            <NavLink exact to="a-propos" activeClassName="nav-active"> About</NavLink>
            <NavLink exact to="news" activeClassName="nav-active"> News</NavLink>
        </div>
    );
};

export default Navigation;