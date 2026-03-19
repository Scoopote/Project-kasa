function Banner({ image, text }) {
  return (
    <section className="banner">
      {image && <img src={image} alt="" className="banner__image" />}
      {text && <h1 className="banner__text">{text}</h1>}
    </section>
  );
}

export default Banner;
