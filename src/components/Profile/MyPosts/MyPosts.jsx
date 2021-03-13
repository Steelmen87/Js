import React from 'react'
import pro from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    return (
      <div>
           My post
         <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className='post'>
          <Post message='Hi , how are you ?' two=' I am fine.' lick='5'/>
          <Post message="It's my first post." two=' Uraa!' lick='10'/>
          
        </div>
      </div>
      
    );
}

export default MyPosts;