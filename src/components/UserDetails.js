import React from 'react';
import { useHistory, useParams }  from 'react-router-dom';

import './UserDetails.css'

function UserDetails({data}) {
    const history = useHistory();
    const userId = useParams();
    const person = data.find(person => person.login.uuid === userId.id); //Finding the person onclicked
    return (
        <div className='container text-center details'>  
            <button className='btn btn-primary m-3' onClick={() => history.goBack()} >Go Back</button>
            <div>
                <img src={person.picture.large} alt="person pic" className='mb-3'/>
                <p><span className='font-weight-bold'>Name: </span> {person.name.first} {person.name.last}</p>
                <p><span className='font-weight-bold'>Location: </span>{person.location.city} {person.location.country}</p>
                <p><span className='font-weight-bold'>Email: </span> {person.email}</p>
                <p><span className='font-weight-bold'>Phone: </span> {person.phone}</p>
            </div>
        </div>
    )
}

export default UserDetails
