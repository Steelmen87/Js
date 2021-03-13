import React from 'react'
import classes from './NavBar.module.css';
const NavBar = () => {
    return (
      <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <a>Profile</a>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <a>Messages</a>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <a>New</a>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <a>Music</a>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <a>Settings</a>
      </div>
    </nav>
    );
}

export default NavBar;