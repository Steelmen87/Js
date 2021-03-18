import React from 'react'
import pro from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    return (
      <div className={pro.postsBlock}>
          <h3>My post</h3>
         <div>
             <div>
          <textarea></textarea>
             </div>
                 <button>Add post</button>
        </div>
        <div className={pro.posts}>
          <Post message='Hi , how are you ?' two=' I am fine.' lick='5'/>
          <Post message="It's my first post." two=' Uraa!' lick='10'/>
          
        </div>
      </div>
      
    );
}

export default MyPosts;