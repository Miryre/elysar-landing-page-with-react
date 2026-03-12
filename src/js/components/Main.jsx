import Hero from "./Hero";
import Cardrow from "./Cardrow";

const Main = () => {
  return (
    <>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Hero />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Cardrow />
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};

export default Main;
