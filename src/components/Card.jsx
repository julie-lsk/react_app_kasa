import styles from "../utils/style/components/card.module.scss";



function Card({title, picture, onClick})
{
    return (

        /* Si l'utilisateur clique sur le composant, le détail sur le logement s'affiche (CardDeatil) */
        <div 
            className={styles.cardWrapper} 
            style={{backgroundImage:`url(${picture})`}} 
            onClick={onClick} /* onClick = prop pour ouvrir la "modale" */
        > 
            <p>{title}</p> 

        </div>
    )
}

export default Card