import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
  
  let dialogsElements = props.dialogsData.map((d) => (<DialogItem name={d.name} id={d.id} />));
  
  let messagesElements = props.messageData.map((m) => (<Message message={m.message} />));

  let newMessage = React.createRef();

  let addMESSAGE = () => {
    let message = newMessage.current.value;
    props.addAnswer(message);
  }
  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
      <div ><textarea ref={newMessage}></textarea>
      <button onClick={addMESSAGE}>Add message</button></div>
      </div>
      </div>
    
  )
};
export default Dialogs;
