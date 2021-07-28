export default function PlantImg(props) {
    const { img, species } = props;

    return (
        <div className='img-container'>
            <img alt={`An ${species} plant`} src={`${img}`} />
        </div>
    )
}