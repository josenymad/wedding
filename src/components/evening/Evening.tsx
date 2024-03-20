import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Evening = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-green-900 min-h-screen text-white p-2">
      <hgroup className="font-berkshire">
        <Link to="/evening">
          <h2 className="text-7xl mb-8">Evening reception</h2>
        </Link>
        <nav className="mb-8 text-2xl">
          <ul className="flex">
            <li className="mx-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4">
              <Link to="camping">Camping</Link>
            </li>
            <li className="mx-4">
              <Link to="plans-for-the-day">Plans for the day</Link>
            </li>
            <li className="mx-4">
              <Link to="rsvp">RSVP</Link>
            </li>
          </ul>
        </nav>
      </hgroup>
      {pathname === "/evening" ? (
        <div className="font-cherry text-xl">
          <h3 className="mb-4">
            Whooop, we're getting married! We can't wait to party with you.
          </h3>
          <p>
            Hopefully we have provided all the information you need on this
            page, but if not, contact XXX.
          </p>
        </div>
      ) : null}
      <Outlet />
    </div>
  );
};

export default Evening;
