import styles from "../utils/style/pages/apropos.module.scss";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";



function APropos()
{
    return (
        <main>

            <Banner />

            <section className={styles.collapseWrapper}>

                <Collapse title={"Fiabilité"} description={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et, toutes les informations sont régulièrement vérifiées par nos équipes." } />
                <Collapse title={"Respect"} description={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exlcusion de notre plateforme."} />
                <Collapse title={"Service"} description={"Notre équipe dévouée est là pour répondre à vos besoins, de la recherche du logement idéal à l'assistance tout au long de votre séjour. Avec notre engagement envers l'excellence du service client, nous visons à rendre votre expérience avec Kasa aussi agréable et sans tracas que possible."} />
                <Collapse title={"Sécurité"} description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
                
            </section>

        </main>
    )
}

export default APropos