import { Link } from "react-router-dom";
import styles from "../utils/style/components/error.module.scss"



function Error()
{
    return (
        <section className={styles.errorPage}>

            <p className={styles.error404}>404</p>
            <p className={styles.errorText}>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>

        </section>
    )
}

export default Error