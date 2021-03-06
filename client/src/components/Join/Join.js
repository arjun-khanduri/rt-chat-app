import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join a room</h1>
                <div><input placeholder='Name' className='joinInput' type='text' onChange={(event) => setName(event.target.value)}/></div>
                {/* <div><input placeholder='Room' className='joinInput mt-20' type='text' onChange={(event) => setRoom(event.target.value)}/></div> */}
                <div><select className='joinInput mt-20' onChange={(event) => setRoom(event.target.value)}>
                        <option value='null'>Select a room</option>
                        <option>Room A</option>
                        <option>Room B</option>
                        <option>Room C</option>
                        <option>Room D</option>
                        <option>Room E</option>
                    </select></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type='submit'>Join</button>
                </Link>   
            </div>
        </div>
    )
}

export default Join;