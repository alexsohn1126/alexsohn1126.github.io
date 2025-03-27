import { useState } from "react";
import Home from "./component/home";
import AboutMe from "./component/aboutme";
import Contact from "./component/contact";
import Experience from "./component/experience";
import Projects from "./component/projects";

type Pages = "home" | "aboutme" | "contact" | "experience" | "projects";

function App() {
  const [activeComponent, setActiveComponent] = useState<Pages>("home");

  return (
    <div className="min-h-screen text-gray-800 relative pb-12 bg-slate-50">
      <header className="w-full flex justify-center space-x-2 shadow">
        <div
          className="p-2 hover:text-gray-400 cursor-pointer"
          onClick={() => setActiveComponent("home")}
        >
          Home
        </div>
        <div
          className="p-2 hover:text-gray-400 cursor-pointer"
          onClick={() => setActiveComponent("aboutme")}
        >
          About Me
        </div>
        <div
          className="p-2 hover:text-gray-400 cursor-pointer"
          onClick={() => setActiveComponent("experience")}
        >
          Experience
        </div>
        <div
          className="p-2 hover:text-gray-400 cursor-pointer"
          onClick={() => setActiveComponent("contact")}
        >
          Contact
        </div>
        <div
          className="p-2 hover:text-gray-400 cursor-pointer"
          onClick={() => setActiveComponent("projects")}
        >
          Projects
        </div>
      </header>
      <main id="content-container" className="flex flex-col justify-center">
        <CurrPage currPage={activeComponent} />
      </main>
      <footer className="w-full flex justify-center absolute bottom-0 h-12 shadow-[0_-3px_3px_rgb(0,0,0,0.15)]">
        <div className="p-2">Copyright 2024. Moohaeng Sohn</div>
      </footer>
    </div>
  );
}

function CurrPage({ currPage }: { currPage: Pages }) {
  switch (currPage) {
    case "home":
      return <Home />;
    case "aboutme":
      return <AboutMe />;
    case "contact":
      return <Contact />;
    case "experience":
      return <Experience />;
    case "projects":
      return <Projects />;
    default:
      return <Home />;
  }
}

export default App;
