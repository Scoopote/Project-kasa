import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow.jsx";
import Collapse from "../components/Collapse.jsx";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  // Si l'id ne correspond à aucun logement → 404
  if (!logement) {
    return <Navigate to="*" replace />;
  }

  const {
    title,
    location,
    pictures,
    tags,
    host,
    rating,
    description,
    equipments,
  } = logement;

  return (
    <main className="logement-page">
      <Slideshow pictures={pictures} />

      <section className="logement-page__top">
        <div className="logement-page__info">
          <h1 className="logement-page__title">{title}</h1>
          <p className="logement-page__location">{location}</p>
          <div className="logement-page__tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-page__host-rating">
          <div className="host">
            <p className="host__name">{host.name}</p>
            <img src={host.picture} alt={host.name} className="host__picture" />
          </div>

          <div className="rating">
            {Array.from({ length: 5 }).map((_, index) => {
              const isActive = index < Number(rating);
              return (
                <span
                  key={index}
                  className={`rating__star ${
                    isActive ? "rating__star--active" : ""
                  }`}
                >
                  ★
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="logement-page__collapses">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {equipments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  );
}

export default Logement;
