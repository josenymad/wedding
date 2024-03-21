import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Travel from "../components/Travel";
import Accommodation from "../components/Accommodation";
import FAQs from "../components/FAQs";
import RSVP from "../components/RSVP";
import MobileNavbar from "./MobileNavbar";

interface MainProps {
  reference: (node?: Element | null | undefined) => void;
  inView: boolean;
}

const Main: React.FC<MainProps> = ({ reference, inView }) => {
  return (
    <div>
      {window.innerWidth > 1200 ? <Navbar inView={inView} /> : <MobileNavbar />}
      <LandingPage />
      <Travel />
      <Accommodation />
      <FAQs reference={reference} />
      <RSVP />
    </div>
  );
};

export default Main;
