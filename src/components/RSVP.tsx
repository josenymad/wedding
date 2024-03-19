import rsvpPhoto from "../assets/rsvpPhoto.jpg";

const Rsvp = () => {
  return (
    <section
      className="bg-rose-600 min-h-screen text-white text-center"
      id="rsvp"
    >
      <h2 className="text-7xl font-berkshire mb-8 p-2">RSVP</h2>
      <img
        src={rsvpPhoto}
        alt="Ben and Neva"
        className="w-1/4 rounded-full m-auto"
      />
    </section>
  );
};

export default Rsvp;
