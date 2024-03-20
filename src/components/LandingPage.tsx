import tenerife from "../assets/landingPageCompressed.jpg";

const LandingPage = () => {
  return (
    <section id="landing_page" className="bg-green-900 min-h-screen">
      <img src={tenerife} alt="tenerife" />
      <hgroup className="absolute top-[3vw] left-[2vw] text-center">
        <h1 className="text-white text-[7vw] font-berkshire">Ben and Neva</h1>
        <div className="font-cherry text-green-900 text-[1.25vw]">
          <p>Whitebottom Farm, Etherow Country Park, Stockport, SK6 5JE</p>
          <p>Saturday 7th of September 2024</p>
        </div>
      </hgroup>
    </section>
  );
};

export default LandingPage;
