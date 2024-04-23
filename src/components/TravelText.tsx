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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.668380460389!2d-2.041104323654124!3d53.420756669153846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bcb5b5426a31b%3A0x57bbad99123b90bb!2sWhitebottom%20Farm%20Weddings%2FEvents!5e0!3m2!1sen!2suk!4v1710790029096!5m2!1sen!2suk"
        loading="lazy"
        className="w-[80vw] sm:w-[50vw] xl:h-[10vw] rounded m-auto"
      />
    </hgroup>
  );
};

export default TravelText;
