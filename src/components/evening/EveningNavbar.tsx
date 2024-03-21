import { Link } from "react-router-dom";

const EveningNavbar = () => {
  return (
    <nav className="font-berkshire p-2 text-[2.5vw] mb-4">
      <ul>
        <li className="inline-block mr-16">
          <Link to="/">Home</Link>
        </li>
        <li className="inline-block mr-16">
          <Link to="camping">Camping</Link>
        </li>
        <li className="inline-block mr-16">
          <Link to="plans-for-the-day">Plans for the day</Link>
        </li>
        <li className="inline-block mr-16">
          <Link to="rsvp">RSVP</Link>
        </li>
      </ul>
    </nav>
  );
};

export default EveningNavbar;
