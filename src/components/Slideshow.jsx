import { useState } from "react";

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
      <img
        src={pictures[currentIndex]}
        alt=""
        className="slideshow__image"
      />

      {total > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--prev"
            onClick={goToPrev}
          >
            ‹
          </button>
          <button
            className="slideshow__arrow slideshow__arrow--next"
            onClick={goToNext}
          >
            ›
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
