import logoWhite from "../assets/logo_white.svg";
import styles from "../utils/style/components/footer.module.scss"


function Footer()
{
    return (
        <footer className={styles.footer}>
            <img src={logoWhite} alt="Logo de Kasa"></img>

            <p>© 2024 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer