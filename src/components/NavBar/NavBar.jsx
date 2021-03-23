import React from 'react'
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
      <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/new" activeClassName={classes.active}>New</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
      </div>

      <div className={`${classes.item} ${classes.active}`} >
        <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
      </div>
      
    </nav>
    );
}

export default NavBar;