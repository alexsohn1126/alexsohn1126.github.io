import { useState } from "react";

function ProjectImages({ images }: { images: string[] }) {
  const [currIndex, setIndex] = useState(0);

  const onNextButtonClick = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const onPrevButtonClick = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full py-2 rounded relative">
      <div className="relative aspect-video bg-gray-100 rounded shadow">
        <img
          className="rounded shadow object-contain w-full h-full"
          src={images[currIndex]}
          alt={`Project screenshot ${currIndex + 1}`}
        />
        <button
          className="absolute cursor-pointer top-1/2 -translate-y-1/2 left-2 h-10 w-10 opacity-50 hover:opacity-100 transition-opacity bg-slate-500/50 rounded-full flex items-center justify-center"
          onClick={onPrevButtonClick}
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <button
          className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-2 h-10 w-10 opacity-50 hover:opacity-100 transition-opacity bg-slate-500/50 rounded-full flex items-center justify-center"
          onClick={onNextButtonClick}
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
      <p className="text-center mt-1">{`${currIndex + 1}/${images.length}`}</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex flex-col items-center px-4">
      <div className="text-4xl text-center pt-6 md:pt-12">Projects</div>
      
      {/* Project 1 */}
      <div className="flex flex-col w-full max-w-3xl my-6 bg-slate-200 rounded p-4 shadow">
        <a
          className="text-lg font-semibold underline cursor-pointer flex items-center justify-center"
          href="https://canuckcarto.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CanuckCarto.ca
          <img 
            src="external-link.svg" 
            alt="External link" 
            className="ml-1 h-4 w-4 md:h-4 md:w-4" 
          />
        </a>
        <div className="text-md text-gray-500 text-center py-2">
          2025 <br />
          React, Leaflet, OSM, OverpassAPI
        </div>
        <ProjectImages images={["canuckcarto-1.png", "canuckcarto-2.png"]} />
        <ol className="list-disc list-inside space-y-1 mt-3 pl-2">
          <li>
            Made a web application to allow Canadians to see which Businesses
            are Canadian or not.
          </li>
          <li>
            Optimized the rendering of nearly 200,000 business locations in
            Canada, using server-side clustering.
          </li>
        </ol>
      </div>
      
      {/* Project 2 */}
      <div className="flex flex-col w-full max-w-3xl my-6 bg-slate-200 rounded p-4 shadow">
        <a
          className="text-lg font-semibold underline cursor-pointer flex items-center justify-center"
          href="https://github.com/alexsohn1126/OneOnOne"
          target="_blank"
          rel="noopener noreferrer"
        >
          One on One
          <img 
            src="external-link.svg" 
            alt="External link" 
            className="ml-1 h-4 w-4 md:h-4 md:w-4" 
          />
        </a>
        <div className="text-md text-gray-500 text-center py-2">
          January 2024 - April 2024 <br />
          React, Django, SQLite, Tailwind CSS
        </div>
        <ProjectImages
          images={[
            "oneonone-screenshot-1.png",
            "oneonone-screenshot-2.png",
            "oneonone-screenshot-3.png",
          ]}
        />
        <ol className="list-disc list-inside space-y-1 mt-3 pl-2">
          <li>
            Made a web application to allow music professors to schedule a
            meeting with their students using React for the frontend and Django
            for the backend.
          </li>
          <li>
            Followed RESTful API design to make the backend using Django
            framework, and used React for the frontend.
          </li>
        </ol>
      </div>
      
      {/* Project 3 */}
      <div className="flex flex-col w-full max-w-3xl my-6 bg-slate-200 rounded p-4 shadow">
        <a
          className="text-lg font-semibold underline cursor-pointer flex items-center justify-center"
          href="https://github.com/alexsohn1126/LeetcodeNotes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leetcode Notes
          <img 
            src="external-link.svg" 
            alt="External link" 
            className="ml-1 h-4 w-4 md:h-4 md:w-4" 
          />
        </a>
        <div className="text-md text-gray-500 text-center py-2">
          July 2023
          <br />
          Javascript, HTML, CSS
        </div>
        <ProjectImages
          images={["leetcode-notes-1.png", "leetcode-notes-2.png"]}
        />
        <ol className="list-disc list-inside space-y-1 mt-3 pl-2">
          <li>
            Made a Firefox browser extension to store notes for each leetcode
            question.
          </li>
          <li>
            Check out the extension (for Firefox):{" "}
            <a
              className="underline hover:no-underline hover:text-slate-400"
              href="https://addons.mozilla.org/en-CA/firefox/addon/leetcode-notes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Here.
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Projects;
