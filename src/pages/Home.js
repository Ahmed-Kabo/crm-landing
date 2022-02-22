import ChooseUs from "../components/ChooseUs";
import FAQComponents from "../components/FAQComponents";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Massage from "../components/Massage";
import Offer from "../components/Offer";
import Ready from "../components/Ready";
import Tasks from "../components/Tasks";
import Testmonails from "../components/Testmonails";
import UxStructure from "../components/UxStructure";

const Home = () => {
  return (
    <>
      <Header />
      <ChooseUs />
      <UxStructure />
      <Ready />
      <Tasks />
      <Offer />
      <FAQComponents />
      <Testmonails />
      <Massage />
      <Footer />
    </>
  );
};

export default Home;
