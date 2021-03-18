import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import pro from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;