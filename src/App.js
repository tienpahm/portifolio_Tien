import "./App.css";
import BacktoTop from "./Component/BacktoTop/BacktoTop";
import Body from "./Component/Body/Body";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Modal from "./Component/Modal/Modal";

function App() {
  return (
    <div className="App portfolio">
      <Modal />

      <Header />
      <Body />
      <Footer />
      <BacktoTop />
    </div>
  );
}

export default App;
