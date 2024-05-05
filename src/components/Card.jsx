import styles from "../utils/style/components/card.module.scss";



function Card({title, picture})
{
    return (
        <div className={styles.cardWrapper} style={{backgroundImage:`url(${picture})`}}>
            <p>{title}</p>            
        </div>
    )
}

export default Card