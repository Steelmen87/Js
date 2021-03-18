import React from 'react'
import pro from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi , how are you ?',lick:5},
        {id: 2, message: 'It\'s my first post.',lick:23}
    ]
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
          <Post message={postsData[0].message} two=' I am fine.' lick={postsData[0].lick}/>
          <Post message={postsData[1].message} two=' Uraa!' lick={postsData[1].lick}/>
          
        </div>
      </div>
      
    );
}

export default MyPosts;