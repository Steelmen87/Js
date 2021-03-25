import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import pro from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts Myposts={props.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;