import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import About from "./components/About";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden ">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
