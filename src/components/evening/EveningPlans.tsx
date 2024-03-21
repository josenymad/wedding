const EveningPlans = () => {
  return (
    <ul className="font-cherry text-lg p-2">
      <li className="mb-4 font-bold">Please arrive at 7pm.</li>
      <li className="mb-4">
        <p className="font-bold">7pm til midnight - Music and dancing</p>
        <p>
          Featuring live music from the brilliant Ríoghnach Connolly and Ellis
          Davies from{" "}
          <a href="https://honeyfeet.org/" className="underline">
            Honeyfeet
          </a>
          .
        </p>
      </li>
      <li className="mb-4">
        <p className="font-bold">9pm - Evening food</p>
        <p>Grab a sausage or bacon sarnie.</p>
      </li>
      <li className="mb-4">
        <p className="font-bold">
          Midnight til 2am - Silent disco and chilling
        </p>
        <p>
          The loud music has to stop just before midnight, but we’ll have some
          headphones for a silent disco so you can keep dancing until 2am!
        </p>
      </li>
    </ul>
  );
};

export default EveningPlans;
