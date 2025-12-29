import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./sections/hero";
import NavBar from "./sections/NavBar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  );
};

export default App;
