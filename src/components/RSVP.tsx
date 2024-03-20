import rsvpPhoto from "../assets/rsvpPhoto.jpg";
import { Link } from "react-router-dom";

const Rsvp = () => {
  return (
    <section className="bg-rose-600 min-h-screen text-white" id="rsvp">
      <h2 className="text-7xl font-berkshire mb-8 p-2">RSVP</h2>
      <nav>
        <ul className="flex justify-center items-center font-cherry text-4xl">
          <li>
            <Link to="ceremony">Ceremony guests</Link>
          </li>
          <img
            src={rsvpPhoto}
            alt="Ben and Neva"
            className="w-1/4 rounded-full mx-8"
          />
          <li>
            <Link to="evening">Evening reception guests</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Rsvp;
