import {
  Hero,
  About,
  Contact,
  Experience,
  Projects,
  Testimonials,
} from "@/sections";
import { Navbar } from "@/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
