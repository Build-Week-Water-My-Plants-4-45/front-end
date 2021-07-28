export default function PlantImg(props) {
    const { img, species } = props;

    return (
        <div class='img-container'>
            <img alt={`An ${species} plant`} src={`${img}`} />
        </div>
    )
}