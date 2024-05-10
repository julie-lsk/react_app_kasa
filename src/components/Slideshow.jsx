import styles from "../utils/style/components/slideshow.module.scss"
import logements from "../data/logements.json";


function Slideshow({data})
{
    return (
        <div>
            {data.pictures.map((item, index) =>
            {
                return <img src={item} alt={data.description} key={`${data.id}-${index}`}></img>
            })}
        </div>
    )
}

export default Slideshow