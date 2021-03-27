import React from "react";
import pro from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postsElements = props.Myposts.map((p) => (<Post message={p.message} lick={p.lick} />
  ));

  let newPostElement = React.createRef(); //создаём ссылку на элемент textarea


  let addPost = () => {
    props.addPost();
    
  }
let onPostChange = () =>{
  let text = newPostElement.current.value;
  props.updateNewText(text);
}


  return (
    <div className={pro.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={pro.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
