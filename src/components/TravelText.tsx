import TravelMap from "./TravelMap";

const TravelText = () => {
  return (
    <hgroup className="p-2">
      <h2 className="text-[9vw] font-berkshire mb-4">Travel</h2>
      <ul className="font-cherry text-lg max-w-[85vw]">
        <li>
          <p className="mb-4">
            Use postcode SK6 5JE, which should take you to Montague Street.
            Continue through Etherow Country Park, bear right at the cottages,
            go over the waterfall bridge and follow the tarmac road to
            Whitebottom Farm.
          </p>
        </li>
        <li className="mb-4">
          <a
            href="https://w3w.co/deploying.propose.streamers"
            className="underline"
            target="_blank"
          >
            What3Words
          </a>
        </li>
        <li>
          <p className="mb-4">
            If you are getting taxis, the numbers below should know the
            location. We recommend booking in advance for your journey home. The
            venue does come up on Uber and Bolt (Whitebottom Farm
            Weddings/Events).
          </p>
        </li>
        <li>
          <ul className="mb-4">
            <li>0161 427 0777</li>
            <li>0161 494 1919</li>
          </ul>
        </li>
      </ul>
      <TravelMap />
    </hgroup>
  );
};

export default TravelText;
