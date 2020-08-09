import React from 'react';
import {Link} from 'react-router-dom';
import './UserItem.css';

function UserItem({person}) {
    return (
        <Link to={`/user/${person.login.uuid}`}>
            <li className='item'>
                <img src={person.picture.large} alt="Profile pic"/>
                <p className='name'>{person.name.first} {person.name.last}</p>
            </li>
        </Link>
    )
}

export default UserItem
