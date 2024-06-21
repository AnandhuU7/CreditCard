import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Maincontent from "./components/MainContent";

function App() {
  return (
    <div className="contain">
      <Header />
      <Maincontent/>
      <Footer/>
    </div>
  );
}

export default App;
