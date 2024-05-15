import { Link } from "react-router-dom";
import styles from "../utils/style/components/card.module.scss";


/* Au clic sur le composant, la page avec les infos du logement s'affiche (via Link) */

function Card({id, title, picture})
{
    return (
        <Link to={`/logement/${id}`} className={styles.link}>

            <div className={styles.cardWrapper} style={{backgroundImage:`url(${picture})`}}>

                <p>{title}</p>

            </div>

        </Link>
    )
}

export default Card