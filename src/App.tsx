import Main from "./components/Main";
import Ceremony from "./components/ceremony/Ceremony";
import Evening from "./components/evening/Evening";
import CeremonyCamping from "./components/ceremony/CeremonyCamping";
import CeremonyPlans from "./components/ceremony/CeremonyPlans";
import CanYouHelp from "./components/ceremony/CanYouHelp";
import EveningCamping from "./components/evening/EveningCamping";
import EveningPlans from "./components/evening/EveningPlans";
import RsvpForm from "./components/RsvpForm";
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
          <Route
            path="rsvp"
            element={
              <RsvpForm formLink="https://forms.office.com/e/UDPV9Mi2zP" />
            }
          />
        </Route>
        <Route path="evening" element={<Evening />}>
          <Route path="camping" element={<EveningCamping />} />
          <Route path="plans-for-the-day" element={<EveningPlans />} />
          <Route
            path="rsvp"
            element={
              <RsvpForm formLink="https://forms.office.com/e/1egLYrk0S1" />
            }
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
