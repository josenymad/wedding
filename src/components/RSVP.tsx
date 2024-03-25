import rsvpPhoto from "../assets/rsvpPhoto.jpg";
import { Link } from "react-router-dom";

const Rsvp = () => {
  return (
    <section className="bg-rose-600 min-h-screen text-white" id="rsvp">
      <h2 className="text-[9vw] font-berkshire ml-2">RSVP</h2>
      <nav>
        <ul className="font-cherry text-lg text-center p-2 xs:grid xs:grid-cols-3 xs:items-center xs:text-[2.5vw]">
          <li className="mb-4">
            <Link to="ceremony" className="underline">
              Ceremony guests
            </Link>
          </li>
          <li className="xs:order-3 mb-4">
            <Link to="evening" className="underline">
              Evening reception guests
            </Link>
          </li>
          <li className="p-2">
            <img
              src={rsvpPhoto}
              alt="Ben and Neva"
              className="rounded-full shadow-lg"
            />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Rsvp;
