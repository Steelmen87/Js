import React from 'react'
import s from './Post.module.css';
const Post = (props) => {
    return (      
          <div className={s.item}>
            <img src='https://i.pinimg.com/originals/20/72/fd/2072fdeeb8a0a67903428e483db8e7f3.jpg'/>
             { props.message} 
             {props.two}
             <div>
               <span>Like {props.lick}</span>
             </div>
          </div>
          
    );
}

export default Post;