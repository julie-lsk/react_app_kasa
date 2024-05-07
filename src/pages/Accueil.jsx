import styles from "../utils/style/pages/accueil.module.scss";
import Card from "../components/Card";
import Banner from "../components/Banner";
import logements from "../data/logements.json";



function Accueil()
{
    return (
        <main>

            <Banner />

            <section className={styles.cardContainer}>
                {logements.map((logement) =>
                {
                    return (
                        <Card 
                            key={`${logement.id}`}
                            title={logement.title}
                            picture={logement.cover}
                        />
                    )
                })}
            </section>

        </main>
    )
}

export default Accueil