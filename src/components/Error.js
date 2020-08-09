import React from 'react';


function Error({error}) {
    return (
        <div className='container display-4 mt-3'>
            <p className='text-danger'>Oops...{error.message}</p>
        </div>
    )
}

export default Error
