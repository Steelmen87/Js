import React from "react";
import p from './Friends.module.css';
import { NavLink } from "react-router-dom";

const BestFriend = (props) => {
  let path = "/bestfriends/" + props.id;
  return (
    
    <div className={p.item} >
      <img  src='https://i.pinimg.com/originals/20/72/fd/2072fdeeb8a0a67903428e483db8e7f3.jpg' alt=""/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default BestFriend;
