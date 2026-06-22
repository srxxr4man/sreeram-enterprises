import './app.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Proprietor from "./Proprietor";
import Contact from "./Contact";
import Terms from "./Terms";
import Footer from "./Footer";
import Products from "./Products";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Services />
        <Products />
        <Proprietor />
        <Contact />
        <Terms />
      </main>
      <Footer />
    </div>
  );
}

export default App;