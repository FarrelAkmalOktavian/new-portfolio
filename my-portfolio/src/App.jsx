import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background text-ink font-sans">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}``