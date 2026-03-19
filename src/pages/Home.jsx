import logements from "../data/logements.json";
import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import bannerHome from "../assets/banner-home.png"; // ajuste le nom si besoin

function Home() {
  return (
    <main>
      <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />

      <section className="cards-grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
