import { useParams } from "react-router-dom";
import styles from "../utils/style/pages/logement.module.scss";
import starRed from "../utils/assets/star_red.svg";
import starGrey from "../utils/assets/star_grey.svg";
import Slideshow from "../components/Slideshow";
import Error from "../components/Error";
import logements from "../data/logements.json";
import Collapse from "../components/Collapse";


function Logement()
{
    let { logementId } = useParams(); // Récup l'id dans l'URL


    /*********** Recherche du logement dans tab JSON selon id récupéré dans URL **********/
    let logement, index; /* logement = objet du logment en JSON */
    for (index = 0; index < logements.length; index++)
    {
        if(logements[index].id === logementId)
        {
            /* Stocke toutes les données du logement sélectionné ds logement */
            logement = logements[index];
            break;
        }
    }


    /********** Gestion des erreurs **********/
    if (index === logements.length)
    {
        /* Si mauvais id ou si on arrive à la fin de nos données = erreur */
        return <Error />;
    }

    /********** Génération des notes sur 5 étoiles **********/
    function generateStars(rating)
    {
        const stars = [];
        const totalStars = [4];

        for (let i = 0; i <= totalStars; i++)
        {
            const starImg = (
                <img
                    src={i < rating ? starRed : starGrey}
                    key={`star_${i}`}
                    className={styles.stars}
                    alt={i < rating ? "Red star" : "Grey star"}>
                </img>
            )

            stars.push(starImg); /* MAJ du tableau */
        }
        return stars;
    }

    /* Création d'une variable car appel de variable impossible dans return */
    const stars = generateStars(parseInt(logement.rating));


    /********** Infos sur le logement sélectionné **********/
    return (
        <main className={styles.logementPage}>

            <Slideshow data={logement} />

            <section className={styles.infosWrapper}>

                <div className={styles.logementInfos}> {/* FIXME: class utile ou pas */}

                    <h1 className={styles.title}>{logement.title}</h1>
                    <h2 className={styles.location}>{logement.location}</h2>
                    
                    {logement.tags.map((tag, idx) =>
                    {
                        return (
                            <span className={styles.tags} key={idx}>{tag}</span>
                        )
                    })}

                </div>

                <div className={styles.hostInfos}>

                    <div className={styles.hostWrapper}>
                        <p>{logement.host.name}</p>

                        <img 
                            src={logement.host.picture} 
                            alt={`Hôte de la location : ${logement.host.name}`}>
                        </img>
                    </div>

                    <span>{stars}</span> {/* note sur 5 de l'hôte */}

                </div>

            </section>

            <section className={styles.collapseWrapper}>

                <Collapse title="Description" description={logement.description} />

                <Collapse 
                    title="Équipements" 
                    description={logement.equipments.map((equipment, index) => 
                    {
                        return <li key={index} className={styles.liCollapse}>{equipment}</li>
                    })}
                />

            </section>

        </main>
    )
}

export default Logement