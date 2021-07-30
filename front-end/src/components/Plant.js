import PlantImg from './PlantImg';

export default function Plant(props) {
     const { nickname, species, img, h2oFrequency} = props;

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