import styles from "../utils/style/components/banner.module.scss";
import { useLocation } from "react-router-dom";



function Banner ()
{
    const location = useLocation()

    return (
        <div className={location.pathname === "/" 
        ? `${styles.bannerAccueil} ${styles.banner}`
        : `${styles.bannerAPropos} ${styles.banner}`}>

            {location.pathname === "/" ? <p>Chez vous, partout et ailleurs</p> : ""}
        </div>
    )
}

export default Banner