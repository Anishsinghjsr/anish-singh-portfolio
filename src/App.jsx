import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Home */}
      <main>
        <Hero />

        {/* Temporary Sections */}
         <About />

        <Skills />

       <Projects />
       <Experience />

       <Education />
       <Certifications />
       <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] px-6 py-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Anish Singh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
