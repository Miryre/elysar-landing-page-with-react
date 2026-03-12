const Card = () => {
  return (
    <>
      <div className="card mx-2 my-2" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/200"
          className="card-img-top"
          alt="A random image"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
