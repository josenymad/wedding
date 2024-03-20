import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Travel from "../components/Travel";
import Accommodation from "../components/Accommodation";
import FAQs from "../components/FAQs";
import RSVP from "../components/RSVP";

interface MainProps {
  reference: (node?: Element | null | undefined) => void;
  inView: boolean;
}

const Main: React.FC<MainProps> = ({ reference, inView }) => {
  return (
    <div>
      <Navbar inView={inView} />
      <LandingPage />
      <Travel />
      <Accommodation />
      <FAQs reference={reference} />
      <RSVP />
    </div>
  );
};

export default Main;
