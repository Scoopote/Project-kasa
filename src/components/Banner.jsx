function Banner({ image, text, className = "" }) {
  return (
    <section className={`banner ${className}`}>
      {image && <img src={image} alt="" className="banner__image" />}

      {text && <h1 className="banner__text">{text}</h1>}
      <div className="banner__dark-overlay"></div>
    </section>
  );
}

export default Banner;
