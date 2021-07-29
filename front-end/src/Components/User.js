import React from 'react';
import { Link } from 'react-router-dom';
import Plant from './Plant';

export default function User(props) {
    return (
        <div>
            {
                !props.currentUser ? <h2>Loading...</h2> :
            
            <div>
                <div className='user-header'>
                    <h2>{props.currentUser[0].username}</h2>
                    <Link to='/create-plant'>Add a Plant</Link>
                </div>

                <div>
                    <h3>Hello {props.currentUser[0].username}!  Do your plants need watered?</h3>
                    <div className='plants-list'>
                        {
                            props.currentUser[0].plants.length > 1 
                            ?
                            props.currentUser[0].plants.map((plant, index) => <Link to={`/plants/${plant.id}`}><Plant key={index} nickname={plant.nickname} species={plant.species} img={plant.img} h2oFrequency={plant.h2oFrequency}/></Link>)
                            :
                            <button>Click here to add a Plant!</button>
                        } 
                    </div>
                </div>
            </div>
            }
        </div>
    )
}