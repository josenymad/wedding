const TravelText = () => {
  return (
    <hgroup className="p-2">
      <h2 className="text-7xl font-berkshire">Travel</h2>
      <ul className="font-cherry text-lg">
        <li>
          <p>Directions:</p>
        </li>
        <li>
          <p>
            Use postcode SK6 5JE, which should take you to Montague Street.
            Continue through Etherow Country Park, bear right at the cottages,
            go over the waterfall bridge and follow the tarmac road to
            Whitebottom Farm.
          </p>
        </li>
        <li>
          <a href="https://w3w.co/deploying.propose.streamers">What3Words</a>
        </li>
        <li>
          <p>
            If you are getting taxis the numbers below should know the location,
            and we recommend booking in advance for your journey home. The venue
            does come up on Uber and Bolt (Whitebottom Farm Weddings/Events).
          </p>
        </li>
        <li>
          <ul>
            <li>0161 427 0777</li>
            <li>0161 494 1919</li>
          </ul>
        </li>
      </ul>
    </hgroup>
  );
};

export default TravelText;
