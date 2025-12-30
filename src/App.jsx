import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./sections/hero";
import NavBar from "./sections/NavBar";
import FirstVideo from "./sections/FirstVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
    </main>
  );
};

export default App;
