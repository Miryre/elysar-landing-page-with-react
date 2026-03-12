const Hero = () => {
  return (
    <>
      <div className="container bg-light px-5 py-2 mx-auto my-3 rounded-3">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6"></div>{" "}
          <h1 className="display-1  text-body-emphasis text-start lh-1 mb-3">
            A Warm Welcome!
          </h1>
          <p className="lead text-start ">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Call to action!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
