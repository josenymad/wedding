import tenerife from "../assets/landingPageCompressed.jpg";

const LandingPage = () => {
  return (
    <section id="landing_page" className="bg-green-900 min-h-screen">
      <img src={tenerife} alt="tenerife" />
      <hgroup className="text-center text-white">
        <h1 className="absolute top-[0.1vw] left-[10vw] text-[10vw] font-berkshire">
          Ben and Neva
        </h1>
        <div className="font-cherry lg:absolute lg:top-[13vw] lg:left-[25vw] lg:text-green-900 lg:text-[1.3vw]">
          <p>Whitebottom Farm,</p>
          <p>Etherow Country Park,</p>
          <p>Stockport,</p>
          <p>SK6 5JE</p>
          <p>Saturday 7th of September 2024</p>
        </div>
      </hgroup>
    </section>
  );
};

export default LandingPage;
