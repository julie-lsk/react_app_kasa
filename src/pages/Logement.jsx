import { useParams } from "react-router-dom";
import styles from "../utils/style/pages/logement.module.scss";
import Slideshow from "../components/Slideshow";
import Error from "../components/Error";
import logements from "../data/logements.json";


function Logement()
{
    let { logementId } = useParams(); // Récup l'id dans l'URL

    /*********** Recherche du logement dans tab JSON selon id récupéré dans URL **********/
    let logement, index; /* logement = objet du logment en JSON */
    for (index = 0; index < logements.length; index++)
    {
        if(logements[index].id === logementId)
        {
            /* Récup toutes les données du logement sélectionné */
            logement = logements[index];
            break;
        }
    }

    /********** Gestion des erreurs **********/
    if (index === logements.length)
    {
        /* Si mauvais id ou si on arrive à la fin de nos données = erreur */
        return <Error />
    }


    /********** Infos sur le logement sélectionné **********/
    return (
        <section>

            <div>{logement.title}</div>

            <Slideshow data={logement} />



        </section>
    )
}

export default Logement