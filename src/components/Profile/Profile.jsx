import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import pro from './Profile.module.css';


const Profile = () => {
    return (
      <div className={pro.content}>
        <div>
          <img src='https://photos.gurushots.com/unsafe/0x500/9bc838510e2340ef6bc045d1ad9316f7/3_28af67370b9a2bdb8ae26e2a7a006756.jpg'/>
        </div>
      <div>
        avatar + discription
      </div>
        <MyPosts />
      </div>
    );
}

export default Profile;