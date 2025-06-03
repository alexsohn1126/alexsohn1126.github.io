import { useState } from "react";
import Home from "./component/home";
import AboutMe from "./component/aboutme";
import Contact from "./component/contact";
import Experience from "./component/experience";
import Projects from "./component/projects";

type Pages = "home" | "aboutme" | "contact" | "experience" | "projects";

function App() {
  const [activeComponent, setActiveComponent] = useState<Pages>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", value: "home" },
    { label: "About Me", value: "aboutme" },
    { label: "Experience", value: "experience" },
    { label: "Projects", value: "projects" },
    { label: "Contact", value: "contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (page: Pages) => {
    setActiveComponent(page);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-gray-800 relative pb-12 bg-slate-50">
      {/* Mobile Header */}
      <header className="md:hidden w-full p-4 shadow flex justify-between items-center">
        <div className="font-semibold">Moohaeng Sohn</div>
        <button 
          onClick={toggleMobileMenu}
          className="text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-10">
          {navItems.map((item) => (
            <div
              key={item.value}
              className={`p-4 border-b border-gray-100 cursor-pointer ${
                activeComponent === item.value 
                  ? "bg-slate-100 text-gray-900" 
                  : "hover:bg-slate-50 hover:text-gray-700"
              }`}
              onClick={() => handleNavClick(item.value as Pages)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}

      {/* Desktop Navigation */}
      <header className="hidden md:flex w-full justify-center space-x-2 shadow p-2">
        {navItems.map((item) => (
          <div
            key={item.value}
            className={`p-2 cursor-pointer ${
              activeComponent === item.value 
                ? "text-gray-900 font-medium" 
                : "hover:text-gray-600"
            }`}
            onClick={() => setActiveComponent(item.value as Pages)}
          >
            {item.label}
          </div>
        ))}
      </header>

      <main id="content-container" className="flex flex-col justify-center">
        <CurrPage currPage={activeComponent} />
      </main>
      
      <footer className="w-full flex justify-center absolute bottom-0 h-12 shadow-[0_-3px_3px_rgb(0,0,0,0.15)] items-center">
        <div className="p-2">Copyright 2025. Moohaeng Sohn</div>
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
