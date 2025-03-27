function Home() {
  return (
    <div className="flex flex-col items-center pt-12">
      <img
        alt="Picture of me"
        src="/public/portrait.jpg"
        className="max-w-64 rounded border-2 border-sky-900 shadow-lg"
      />
      <div className="text-3xl p-12">Hi, I am Moohaeng Sohn.</div>
      <div className="text-center">
        I am a graduating Computer Science student from University of Toronto.
        <br />
        Check out what I have done so far, and get to know me better through
        this website!
      </div>
    </div>
  );
}

export default Home;
