import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <article className="card">
      <Link to={`/logement/${id}`}>
        <div className="card__image-wrapper">
          <img src={cover} alt={title} className="card__image" />
        </div>
        <h2 className="card__title">{title}</h2>
      </Link>
    </article>
  );
}

export default Card;
