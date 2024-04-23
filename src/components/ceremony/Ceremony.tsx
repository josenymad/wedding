import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CeremonyMobileNavbar from "./CeremonyMobileNavbar";
import CeremonyNavbar from "./CeremonyNavbar";
import RsvpForm from "../RsvpForm";
import house from "../../assets/house.jpg";
import { RxHamburgerMenu } from "react-icons/rx";

const Ceremony = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-green-900 min-h-screen text-white">
      <Link to="/ceremony">
        <h2 className="text-[9vw] font-berkshire p-2">Ceremony</h2>
      </Link>
      {window.innerWidth > 1000 ? <CeremonyNavbar /> : <CeremonyMobileNavbar />}
      {pathname === "/ceremony" && (
        <div className="font-cherry text-xl max-w-[90vw]">
          <h3 className="p-2">
            Whooop, we're getting married! We can't wait to share our special
            day with you.
          </h3>
          <p className="p-2">
            You'll find all the information you need by navigating this page's
            menu
            {" ("}
            {<RxHamburgerMenu className="inline" />}
            {" on mobile)"}.
          </p>

          <p className="p-2">
            If you need to get in touch, you can also email us{" "}
            <a href="mailto: nevaandben@gmail.com" className="underline">
              here
            </a>
            .
          </p>
          <RsvpForm formLink="https://forms.office.com/e/UDPV9Mi2zP" />
        </div>
      )}
      <Outlet />
      {pathname == "/ceremony" || pathname == "/ceremony/rsvp" ? (
        <div className="max-w-xl m-auto p-4">
          <img src={house} alt="house" className="rounded-2xl shadow-lg" />
        </div>
      ) : null}
    </div>
  );
};

export default Ceremony;
