import React from 'react'
import BestFriend from './BestFriend';


const Friends = (props) => {
    let bestFRIEND = props.friends.map((f) => (<BestFriend name={f.name} id={f.id} />));
    return (
        <div>
            {bestFRIEND}
        </div>
    );
}
export default Friends;