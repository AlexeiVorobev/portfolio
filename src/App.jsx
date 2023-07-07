import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact/";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <div
        style={{
          background: "linear-gradient(to right, #1d1d26 0%, #090909 100%)",
        }}
      >
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
