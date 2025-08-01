import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <Hero />
    </main>
  );
};

export default App;
