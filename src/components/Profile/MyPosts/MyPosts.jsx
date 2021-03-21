import React from "react";
import pro from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postsElements = props.Myposts.map((p) => (<Post message={p.message} two=" I am fine." lick={p.lick} />
  ));
  return (
    <div className={pro.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={pro.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
