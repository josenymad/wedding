import MenuSlider from "../MenuSlider";

const CeremonyCamping = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 p-2">
      <div className="font-cherry text-lg max-w-[85vw]">
        <p className="mb-4">
          You can camp onsite on the Friday and Saturday night. If you do plan
          on staying Friday night, please let us know when you RSVP. If there
          are enough people we will arrange for Tibetan Kitchen to come on
          Friday evening - you'll be able to get a delicious meal for around
          £15. If you're not camping but would like to join us on Friday
          evening, please let us know too.
        </p>
        <p className="mb-4">
          Tents and campervans/caravans are welcome (though there are no
          electric hookups) and you also have the option to{" "}
          <a
            href="https://www.thecanvasco.co.uk/neva-bens-wedding"
            className="underline"
            target="_blank"
          >
            book a bell tent
          </a>{" "}
          for Friday and Saturday night. There are various options available,
          including proper beds!
        </p>
        <p className="mb-4">
          There are two cafes in Etherow Country Park, so you will be able to
          get breakfast/brunch/lunch/hot drinks easily if you are camping.
          Etherow Country Park café and The Potting Shed are a beautiful 15/20
          minute walk from Whitebottom Farm.
        </p>
        <p className="mb-4">
          There is a drinking water tap on site. There will be plenty of showers
          and some places with plug sockets and mirrors, but note that the
          showers will only be running at limited times on Saturday and Sunday
          morning (TBC). We will have a couple of clothes rails for you to hang
          your outfits if you want to. No fires or BBQs on the grass please.
        </p>
      </div>
      <MenuSlider />
    </div>
  );
};

export default CeremonyCamping;
