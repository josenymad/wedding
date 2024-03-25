import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import EveningNavbar from "./EveningNavbar";
import EveningMobileNavbar from "./EveningMobileNavbar";
import EveningRsvp from "./EveningRsvp";

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
          <EveningRsvp />
          <p className="p-2">
            Hopefully we have provided all the information you need on this
            page, but if not, please contact XXX.
          </p>
        </div>
      ) : null}
      <Outlet />
    </div>
  );
};

export default Evening;
