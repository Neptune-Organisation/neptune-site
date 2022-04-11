import Header from "../src/structure/components/Header.js"
import Footer from "../src/structure/components/Footer.js"
import Main from "../src/structure/components/Main.js"
import LandingPage from "./structure/pages/LandingPage.js"
import Aboutme from "./structure/pages/Aboutme.js"
import "./css/main.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
