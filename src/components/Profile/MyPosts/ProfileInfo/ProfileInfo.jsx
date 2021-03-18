import React from 'react'
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://photos.gurushots.com/unsafe/0x500/9bc838510e2340ef6bc045d1ad9316f7/3_28af67370b9a2bdb8ae26e2a7a006756.jpg'/>
            </div>
            <div className={s.discriptionBlock}>
                avatar + discription
            </div>

        </div>
    );
}

export default ProfileInfo;