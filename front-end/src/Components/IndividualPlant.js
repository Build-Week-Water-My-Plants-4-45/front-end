import PlantImg from './PlantImg';
import { useLocation } from 'react-router-dom';

export default function IndividualPlant() {
    const location = useLocation();
    const { nickname, species, h2oFrequency, img } = location.state.plant;
    return (
        <div className='plant-container'>
            <h2>{nickname}</h2>
            <h3>{species}</h3>

            <PlantImg img={img} species={species}/>

            <p>Be sure to water {nickname} {h2oFrequency}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}