import styles from "../utils/style/components/slideshow.module.scss";
import { useState } from "react";


/********** Carousel d'images **********/

function Slideshow({data}) /* data = objet JSON du logement sélectionné */
{
    const [slide, setSlide] = useState(0);


    const nextSlide = () => {
        setSlide(slide === data.pictures.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.pictures.length - 1 : slide - 1)
    };


    return (
        <div className={styles.carousel}>

            {data.pictures.length === 1 ? "" : /* s'il n'y a qu'une seule image, on n'affiche pas la flèche */
            <button /* flèche gauche */
                className={`${styles.arrowLeft} ${styles.arrow}`}
                onClick={prevSlide}>
            </button>}


            {/* Renvoi la liste des images du logement sélectionné sur page d'accueil */}
            {data.pictures.map((item, index) =>
            {
                return (
                    <img 
                        src={item} /* URL */
                        alt={data.description} 
                        key={`${data.id}-${index}`}
                        className={slide === index ? `${styles.slide}` : `${styles.slide} ${styles.slideHidden}`}>
                    </img>
                )
            })}

            {data.pictures.length === 1 ? "" : 
            <button /* flèche droite */
                className={`${styles.arrowRight} ${styles.arrow}`}
                onClick={nextSlide}>
            </button>}


            {/* Boutons d'indications sous image */}
            {data.pictures.length === 1 ? "" :
            <span className={styles.indicators}>
                {data.pictures.map((_, index) =>
                {
                    return (
                        <button 
                            key={index} 
                            onClick={() => setSlide(index)}
                            className={slide === index ? `${styles.indicator}` : `${styles.indicator} ${styles.indicatorInactive}`}>
                        </button>
                    )
                })}
            </span>}

        </div>
    )
}

export default Slideshow