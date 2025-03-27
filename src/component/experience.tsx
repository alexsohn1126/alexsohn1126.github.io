function Experience() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-center pt-6">Experiences</div>
      <div className="flex flex-col items-center align-center mt-6 w-[50%] bg-slate-200 rounded p-4 shadow">
        <div className="text-lg">Backend Developer - SOTI Connect</div>
        <div className="text-md text-gray-500 text-center">
          2024 <br />
          C#, Blazor, REST, MQTT, SNMP, IoT
        </div>
        <ol className="list-disc list-inside">
          <li>
            Helped to optimize existing test suites by fixing bugs in
            integration tests, resulting in a 50-minute cut in test times.
          </li>
          <li>
            Designed custom XML files to represent the functionality of the
            physical printer in a software representation, helping developers
            communicate with printers.
          </li>
          <li>
            Fixed a broken internal tool used to create custom XML files
            automatically, improving the developer workflow.
          </li>
          <li>
            Created an internal XML creation tool using Blazor and the Web API,
            allowing clients to create their XML to be loaded into the system,
            thus streamlining the onboarding process for new customers.
          </li>
        </ol>
      </div>
      <div className="flex flex-col items-center align-center mt-6 w-[50%] bg-slate-200 rounded p-4 shadow">
        <div className="text-lg">Full Stack Developer - FinanceIt</div>
        <div className="text-md text-gray-500 text-center">
          May 2022 - May 2023 <br />
          Ruby on Rails, Ember.js, Airflow, MySQL, Tailwind CSS
        </div>
        <ol className="list-disc list-inside">
          <li>
            Implemented a system to automatically notify users of returned mail
            and marked their accounts, reducing operational costs associated
            with manual user outreach and preventing additional returned mail.
          </li>
          <li>
            The letter-sending system was upgraded to send emails over physical
            mail when a valid email address was available, significantly
            lowering mail-sending costs.
          </li>
          <li>
            Developed and deployed an Airflow job that automated the monthly
            collection and formatting of customer information for Equifax
            (metro2 report), eliminating the need for manual report submission.
          </li>
          <li>
            Developed an internal tool that streamlined the process for
            developers to create new loan instances, eliminating the need to
            complete the full process in their local browsers and enhancing
            development efficiency.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experience;
