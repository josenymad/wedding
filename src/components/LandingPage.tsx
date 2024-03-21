import tenerife from "../assets/landingPageCompressed.jpg";
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";

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
      {window.innerHeight > window.innerWidth && window.innerWidth < 500 ? (
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="m-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-2xl"
        >
          <FaAnglesDown />
        </motion.div>
      ) : null}
    </section>
  );
};

export default LandingPage;
