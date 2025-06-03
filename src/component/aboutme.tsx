function AboutMe() {
  return (
    <div className="px-4 mb-12">
      <div className="text-4xl text-center pt-6">About Me</div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 pt-6 max-w-4xl mx-auto">
        {/* Left Column - Image and Description */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col space-y-2 w-full max-w-md">
            <img
              alt="Picture of me"
              src="portrait.jpg"
              className="w-full rounded border-2 border-sky-900 shadow-lg"
            />
            <div className="rounded bg-slate-200 w-full p-4 shadow">
              Ever since I built my first computer at 13, I have dedicated myself
              to learn ins and outs of software and computers in general.
              <br />
              <br />
              That led me to study computer science at University of Toronto, and
              I was blown away at what we can do with computers.
              <br />
              <br />
              I am always in the process of learning new technologies, from
              newer, refined web frameworks to older, low-level programming
              languages.
            </div>
          </div>
        </div>
        
        {/* Right Column - Technologies */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center rounded w-full max-w-md bg-slate-200 p-4 shadow">
            <h2 className="text-xl"> Technologies </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-3 pt-2">
              <Technology
                borderColor="border-red-700"
                src="ruby_on_rails-logo.svg"
                name="Ruby On Rails"
              />
              <Technology
                borderColor="border-green-800"
                src="django-logo.svg"
                name="Django"
              />
              <Technology
                borderColor="border-cyan-400"
                src="react-logo.svg"
                name="React"
              />
              <Technology
                borderColor="border-orange-600"
                src="html5-logo.svg"
                name="HTML 5"
              />
              <Technology
                borderColor="border-blue-700"
                src="css-logo.svg"
                name="CSS"
              />
              <Technology
                borderColor="border-yellow-500"
                src="javascript-logo.svg"
                name="JavaScript"
              />
              <Technology
                borderColor="border-red-600"
                src="airflow-logo.png"
                name="Airflow"
              />
              <Technology
                borderColor="border-sky-700"
                src="python-logo.svg"
                name="Python"
              />
              <Technology
                borderColor="border-orange-500"
                src="java-logo.svg"
                name="Java"
              />
              <Technology
                borderColor="border-cyan-400"
                src="tailwindcss-logo.svg"
                name="Tailwind CSS"
              />
              <Technology
                borderColor="border-blue-800"
                src="c-logo.svg"
                name="C"
              />
              <Technology
                borderColor="border-slate-800"
                name="And Still Learning more!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Technology({
  borderColor,
  src = "",
  name,
}: {
  borderColor: string;
  src?: string;
  name: string;
}) {
  return (
    <div
      className={`flex flex-col items-center ${borderColor} border-2 rounded p-2 shadow h-full`}
    >
      {src && <img className="mt-auto w-12 h-12 object-contain" src={src} />}
      <p className="self-center mt-auto text-sm pt-1 text-center">{name}</p>
    </div>
  );
}
export default AboutMe;
