import Main from "./components/Main";
import Ceremony from "./components/Ceremony";
import Evening from "./components/Evening";
import CeremonyCamping from "./components/CeremonyCamping";
import CeremonyPlans from "./components/CeremonyPlans";
import CanYouHelp from "./components/CanYouHelp";
import CeremonyRsvp from "./components/CeremonyRsvp";
import { useInView } from "react-intersection-observer";
import { Route, Routes } from "react-router-dom";

function App() {
  const { ref: reference, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Main reference={reference} inView={inView} />}
        />
        <Route path="ceremony" element={<Ceremony />}>
          <Route path="camping" element={<CeremonyCamping />} />
          <Route path="plans-for-the-day" element={<CeremonyPlans />} />
          <Route path="can-you-help" element={<CanYouHelp />} />
          <Route path="rsvp" element={<CeremonyRsvp />} />
        </Route>
        <Route path="evening" element={<Evening />} />
      </Routes>
    </main>
  );
}

export default App;
