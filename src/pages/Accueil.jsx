import { Link } from "react-router-dom";
import styles from "../utils/style/pages/accueil.module.scss";
import Card from "../components/Card";
import Banner from "../components/Banner";
import logements from "../data/logements.json";;



function Accueil()
{
    return (
        <main>

            <div className={styles.homeContent}>

                <Banner />

                <section className={styles.cardContainer}>
                    {logements.map((logement) =>
                    {
                        return (
                            <Card 
                                key={`${logement.id}`}
                                id={logement.id}
                                title={logement.title}
                                picture={logement.cover}
                            />
                        )
                    })}
                </section>

            </div>

        </main>
    )
}

export default Accueil