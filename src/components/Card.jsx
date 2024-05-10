import { Link } from "react-router-dom";
import styles from "../utils/style/components/card.module.scss";



function Card({id, title, picture})
{
    return (

        /* Si l'utilisateur clique sur le composant, le détail sur le logement s'affiche (CardDeatil) */
        <Link to={`/logement/${id}`} className={styles.link}>
            <div 
                className={styles.cardWrapper}
                style={{backgroundImage:`url(${picture})`}}
            > 
                <p>{title}</p> 

            </div>
        </Link>

    )
}

export default Card