import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
