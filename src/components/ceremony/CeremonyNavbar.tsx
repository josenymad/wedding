import { Link } from "react-router-dom";

const CeremonyNavbar = () => {
  return (
    <nav className="font-berkshire p-2 text-[2.5vw] mb-4">
      <ul>
        <li className="inline-block mr-16">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li className="inline-block mr-16">
          <Link to="camping" className="hover:underline">
            Camping
          </Link>
        </li>
        <li className="inline-block mr-16">
          <Link to="plans-for-the-day" className="hover:underline">
            Plans for the day
          </Link>
        </li>
        <li className="inline-block mr-16">
          <Link to="can-you-help" className="hover:underline">
            Can you help?
          </Link>
        </li>
        <li className="inline-block mr-16">
          <Link to="rsvp" className="hover:underline">
            RSVP
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default CeremonyNavbar;
