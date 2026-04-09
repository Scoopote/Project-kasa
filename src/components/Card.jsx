import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <article className="card">
      <Link to={`/logement/${id}`}>
        <div className="card__image-wrapper">
          <div className="card__gradient"></div>
          <img src={cover} alt={title} className="card__image" />
        </div>
        <h1 className="card__title">{title}</h1>
      </Link>
    </article>
  );
}

export default Card;
