import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return <nav className={classes.nav}>
        <div className={classes.nav__item}>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={classes.nav__item}>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className={classes.nav__item}>
            <NavLink to="/friends">Friends</NavLink>
        </div>
        <div className={classes.nav__item}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={classes.nav__item}>
            <NavLink to="/musics">Music</NavLink>
        </div>
        <div className={classes.nav__item}>
            <NavLink to="/settings">Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;