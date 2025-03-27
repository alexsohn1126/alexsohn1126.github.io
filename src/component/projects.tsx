import { useState } from "react";

function ProjectImages({ images }: { images: string[] }) {
  const [currIndex, setIndex] = useState(0);

  const onNextButtonClick = () => {
    if (currIndex === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(currIndex + 1);
    }
  };

  const onPrevButtonClick = () => {
    if (currIndex === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(currIndex - 1);
    }
  };

  return (
    <>
      <div className="w-full h-[500px] py-2 rounded relative">
        <img
          className="rounded shadow h-full object-contain m-auto"
          src={images[currIndex]}
        />
        <button
          className="absolute cursor-pointer my-auto top-0 bottom-0 left-0 h-1/6 w-6 opacity-25 rounded hover:opacity-100 transition-opacity bg-slate-500"
          onClick={onPrevButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left w-full"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <button
          className="absolute cursor-pointer my-auto top-0 bottom-0 right-0 h-1/6 w-6 opacity-25 rounded hover:opacity-100 transition-opacity bg-slate-500"
          onClick={onNextButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right w-full"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
      <p className="">{`${currIndex + 1}/${images.length}`}</p>
    </>
  );
}

function Projects() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-center pt-12">Projects</div>
      <div className="flex flex-col items-center align-center my-6 w-[50%] bg-slate-200 rounded p-4 shadow">
        <a
          className="text-lg underline cursor-pointer"
          href="https://canuckcarto.ca/"
        >
          CanuckCarto.ca
          <img src="external-link.svg" className="ml-1 h-4 w-4 inline" />
        </a>
        <div className="text-md text-gray-500 text-center">
          2025 <br />
          React, Leaflet, OSM, OverpassAPI
        </div>
        <ProjectImages images={["canuckcarto-1.png", "canuckcarto-2.png"]} />
        <ol className="list-disc list-inside">
          <li>
            Made a web application to allow Canadians to see which Businesses
            are Canadian or not.{" "}
          </li>
          <li>
            Optimized the rendering of nearly 200,000 business locations in
            Canada, using server-side clustering.
          </li>
        </ol>
      </div>
      <div className="flex flex-col items-center align-center my-6 w-[50%] bg-slate-200 rounded p-4 shadow">
        <a
          className="text-lg underline cursor-pointer"
          href="https://github.com/alexsohn1126/OneOnOne"
        >
          One on One
          <img src="external-link.svg" className="ml-1 h-4 w-4 inline" />
        </a>
        <div className="text-md text-gray-500 text-center">
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
        <ol className="list-disc list-inside">
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
      <div className="flex flex-col items-center align-center mb-6 w-[50%] bg-slate-200 rounded p-4 shadow">
        <a
          className="text-lg underline cursor-pointer"
          href="https://github.com/alexsohn1126/LeetcodeNotes"
        >
          Leetcode Notes
          <img src="external-link.svg" className="ml-1 h-4 w-4 inline" />
        </a>
        <div className="text-md text-gray-500 text-center">
          July 2023
          <br />
          Javascript, HTML, CSS
        </div>
        <ProjectImages
          images={["leetcode-notes-1.png", "leetcode-notes-2.png"]}
        />
        <ol className="list-disc list-inside">
          <li>
            Made a Firefox browser extension to store notes for each leetcode
            question.
          </li>
          <li>
            Check out the extension (for Firefox):{" "}
            <a
              className="underline hover:no-underline hover:text-slate-400"
              href="https://addons.mozilla.org/en-CA/firefox/addon/leetcode-notes/"
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
