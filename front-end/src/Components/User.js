import React from 'react';
import { Link } from 'react-router-dom';
import Plant from './Plant';
import { dummyData } from './userDummyData'; //For now importing dummy data to pass as props.  It's in a sepreate file to help with component readibility.

export default function User(props) {
    const i = 0;
    return (
        <div>
            <div className='user-header'>
                <h2>{dummyData.users[i].username}</h2>
                <Link to='/create-plant'>Add a Plant</Link>
            </div>

            <div>
                <h3>Hello {dummyData.users[i].username}!  Do your plants need watered?</h3>
                <div className='plants-list'>
                    {
                        dummyData.users[i].plants.length > 1 
                        ?
                        dummyData.users[i].plants.map((plant, index) => <Plant key={index} nickname={plant.nickname} species={plant.species} img={plant.img} h2oFrequency={plant.h2oFrequency}/>)
                        :
                        <button>Click here to add a Plant!</button>
                    }
                </div>
            </div>
        </div>
    )
}