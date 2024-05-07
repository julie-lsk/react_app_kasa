import { useState } from "react";
import arrow from "../assets/arrow.svg";
import styles from "../utils/style/components/collapse.module.scss";



function Collapse ({title, description}) /* Paramètres à préciser lors de l'appel du composant */
{
    const [isVisible, setIsVisible] = useState(false)

    return (
        /* Si l'onglet est ouvert, on affiche tout */
        <div className={styles.collapseStyle}>

            <div className={styles.collapseFlex}>

                <p>{title}</p>

                <img src={arrow} 
                    onClick={() => setIsVisible(!isVisible)}
                    className={`${styles.arrowIcon} ${isVisible ? styles.rotate : ""}`}
                    alt={isVisible ? "Flèche de fermeture de l'onglet" : "Flèche d'ouverture de l'onglet"} >
                </img>

            </div>



            {
                isVisible ?
                    <p className={`${styles.descriptionStyle} ${styles.descriptionVisible}`}>{description}</p> : 
                    <p className={`${styles.descriptionStyle} ${styles.descriptionHidden}`}>{description}</p>

            }
            

        </div>        
    )
}

export default Collapse