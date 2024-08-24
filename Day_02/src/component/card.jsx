function card({ name, source, alt, description }) {
  return (
    <>
      <div className="card1">
        <div className="nft">
          <div className="main">
            <img className="tokenImage" src={source} alt={alt} />
            <h2>{name}</h2>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
