import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero";
import About from "./components/About";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden ">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  );
};

export default App;
