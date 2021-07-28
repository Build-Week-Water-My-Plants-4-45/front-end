import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const initialPlant = {
    nickname: '',
    species: '',
    h2o_frequency: '',
    image: '',
};


export const CreatePlant = (props) => {
    const [plant, setPlant ] = useState(initialPlant);
    const history = useHistory();


    const handleChange = (event) => {
        setPlant({...plant, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPlant(plant);
        history.push('/plants');
    }

    return (
        <div>
            <h1>Create Plant</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nickname
                    <input 
                        type="text"
                        name="nickname"
                        value={plant.nickname}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    H2o Frequency
                    <input 
                        type="text"
                        name="h20_frequency"
                        value={plant.h2o_frequency}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Image URL:
                    <input 
                        type="text"
                        name="image"
                        value={plant.image}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}