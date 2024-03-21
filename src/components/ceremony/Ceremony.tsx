import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CeremonyMobileNavbar from "./CeremonyMobileNavbar";
import CeremonyNavbar from "./CeremonyNavbar";

const Ceremony = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-green-900 min-h-screen text-white">
      <Link to="/ceremony">
        <h2 className="text-[9vw] font-berkshire p-2">Ceremony</h2>
      </Link>
      {window.innerWidth > 1000 ? <CeremonyNavbar /> : <CeremonyMobileNavbar />}
      {pathname === "/ceremony" ? (
        <div className="font-cherry text-xl p-2">
          <h3 className="mb-4">
            Whooop, we're getting married! We can't wait to share our special
            day with you.
          </h3>
          <p>
            Hopefully we have provided all the information you need on this
            page, but if not, please contact XXX.
          </p>
        </div>
      ) : null}
      <Outlet />
    </div>
  );
};

export default Ceremony;
