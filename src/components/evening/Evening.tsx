import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import EveningNavbar from "./EveningNavbar";
import EveningMobileNavbar from "./EveningMobileNavbar";
import RsvpForm from "../RsvpForm";

const Evening = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-green-900 min-h-screen text-white">
      <Link to="/evening">
        <h2 className="text-[9vw] font-berkshire p-2">Evening reception</h2>
      </Link>
      {window.innerWidth > 1000 ? <EveningNavbar /> : <EveningMobileNavbar />}
      {pathname === "/evening" ? (
        <div className="font-cherry text-xl">
          <h3 className="p-2">
            Whooop, we're getting married! We can't wait to party with you.
          </h3>
          <p className="p-2">
            You'll find all the information you need by navigating the menu on
            this page (3 lines on the top right for mobile).
          </p>
          <p className="p-2">
            If you need to get in touch, you can also email us{" "}
            <a href="mailto: nevaandben@gmail.com" className="underline">
              here
            </a>
            .
          </p>
          <RsvpForm formLink="https://forms.office.com/e/1egLYrk0S1" />
        </div>
      ) : null}
      <Outlet />
    </div>
  );
};

export default Evening;
