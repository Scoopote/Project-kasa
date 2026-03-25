import Collapse from "../components/Collapse.jsx";

function About() {
  return (
    <main>
      <Collapse title="Fiabilité">
        <p>Texte de la section Fiabilité…</p>
      </Collapse>

      <Collapse title="Respect">
        <p>Texte de la section Respect…</p>
      </Collapse>

      <Collapse title="Service">
        <p>Texte de la section Service…</p>
      </Collapse>

      <Collapse title="Sécurité">
        <p>Texte de la section Sécurité…</p>
      </Collapse>
    </main>
  );
}

export default About;
