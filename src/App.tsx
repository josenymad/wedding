import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Travel from "./components/Travel";
import Accommodation from "./components/Accommodation";
import FAQs from "./components/FAQs";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: reference, inView } = useInView({
    threshold: 0.75,
  });

  return (
    <main>
      <Navbar inView={inView} />
      <LandingPage />
      <Travel />
      <Accommodation />
      <FAQs reference={reference} />
    </main>
  );
}

export default App;
