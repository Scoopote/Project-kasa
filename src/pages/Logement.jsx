import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow.jsx";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    // si l'id n'existe pas,renvoie vers 404
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="logement">
      <Slideshow pictures={logement.pictures} />

      {/* Penser à ajouter plus tard : titre, hôte, tags, rating, collapses, etc. */}
    </main>
  );
}

export default Logement;
