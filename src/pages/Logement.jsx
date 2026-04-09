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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isActive ? "#ff6060" : "#E3E3E3"}
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-star-icon lucide-star"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
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
