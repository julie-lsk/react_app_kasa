import { useState } from "react";
import styles from "../utils/style/pages/accueil.module.scss";
import Card from "../components/Card";
import Banner from "../components/Banner";
import CardDetail from "../components/logements_details/CardDetail";
import logements from "../data/logements.json";



function Accueil()
{
    const [isCardDetailOpen, setIsCardDetailOpen] = useState(false);

    // Fonction pour ouvrir le CardDetail
    const handleCardClick = () => 
    {
        setIsCardDetailOpen(true);
    };

    return (
        <main>

            {/* La modale est affichée si l'utilisateur clique sur un logement */}
            {isCardDetailOpen ? 
            (
                <CardDetail />
            ) :

            ( /* Tant que l'utilisateur n'a pas cliqué sur une image, la galerie est affichée */
                <div className={styles.homeContent}>
                    <Banner />

                    <section className={styles.cardContainer}>
                        {logements.map((logement) =>
                        {
                            return (
                                <Card 
                                    key={`${logement.id}`}
                                    title={logement.title}
                                    picture={logement.cover}
                                    onClick={handleCardClick} /* voir Card pour détail (prop onClick) */
                                />
                            )
                        })}
                    </section>
                </div>
            )} 
        </main>
    )
}

export default Accueil