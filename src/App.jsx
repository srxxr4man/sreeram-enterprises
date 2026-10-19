import { useState } from 'react';
import './App.css';
import Loader from './Loader';
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Products from "./Products";
import Proprietor from "./Proprietor";
import Contact from "./Contact";
import Terms from "./Terms";
import Footer from "./Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-wrapper">
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}>
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
    </div>
  );
}

export default App;