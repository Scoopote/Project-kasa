import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();

  return (
    <main>
      <h1>Fiche logement</h1>
      <p>ID : {id}</p>
    </main>
  );
}

export default Logement;
