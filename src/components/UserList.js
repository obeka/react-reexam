import React from 'react';
import UserItem from './UserItem';
import './UserList.css'

function UserList({data}) {
    return (
        <ul className='list-container'>
            {data.map(person => <UserItem person={person} key={person.login.uuid}/>)}
        </ul>
    )
}

export default UserList
