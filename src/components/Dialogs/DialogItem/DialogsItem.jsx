import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    
    <div className={s.dialog + " " + s.active}>
      <img clasname={s.img} src='https://i.pinimg.com/originals/20/72/fd/2072fdeeb8a0a67903428e483db8e7f3.jpg'/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
