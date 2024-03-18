import tenerife from "../assets/landingPageCompressed.jpg";

const LandingPage = () => {
  return (
    <section id="landing_page">
      <img src={tenerife} alt="tenerife" />
      <hgroup className="absolute top-12 left-12 text-center">
        <h1 className="text-white text-8xl font-berkshire">Ben and Neva</h1>
        <div className="font-cherry text-green-900 text-lg">
          <p>Whitebottom Farm, Etherow Country Park, Stockport, SK6 5JE</p>
          <p>Saturday 7th of September 2024</p>
        </div>
      </hgroup>
    </section>
  );
};

export default LandingPage;
