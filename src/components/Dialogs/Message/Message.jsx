import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  let newMessage = React.createRef();

  let addMessage = () => {
    let message = newMessage.current.value;
    alert(message);
  }
  return ( <div>
  <div className={s.dialogs}>{props.message}</div>
  <div>
      <button onClick={addMessage}>Add message</button>
      <div ><textarea ref={newMessage}></textarea></div>
      </div>
      </div>
  )
} 
export default Message;