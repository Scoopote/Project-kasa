import { useState } from "react";
import arrowLeft from "../assets/fleche_gauche.svg";
import arrowRight from "../assets/fleche_droite.svg";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = pictures.length;

  if (total === 0) return null;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt="" className="slideshow__image" />

      {total > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--prev"
            onClick={goToPrev}
          >
            <img src={arrowLeft} alt="Précédent" />
          </button>
          <button
            className="slideshow__arrow slideshow__arrow--next"
            onClick={goToNext}
          >
            <img src={arrowRight} alt="Suivant" />
          </button>

          <div className="slideshow__counter">
            {currentIndex + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
