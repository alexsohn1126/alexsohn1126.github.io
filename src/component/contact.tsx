function Contact() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl p-12">Contact Me!</div>
      <div className="flex pt-2 space-x-8">
        <a href="mailto: alexsohn1126@gmail.com">
          <img className="size-32" src="/public/email-logo.svg" />
        </a>
        <a href="https://www.linkedin.com/in/moohaeng-sohn/">
          <img className="size-32" src="/public/linkedin-logo.svg" />
        </a>
        <a href="https://github.com/alexsohn1126">
          <img className="size-32" src="/public/github-logo.svg" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
