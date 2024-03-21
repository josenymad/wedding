interface NavbarProps {
  inView: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ inView }) => {
  let textColour = "text-";

  inView ? (textColour += "black") : (textColour += "white");

  return (
    <nav
      className={`fixed z-10 font-berkshire ${textColour} duration-500 text-[1.4vw] text-right top-2 right-0 p-2 rounded-l-3xl shadow-[inset_0px_0px_30px_rgba(0,0,0,0.3)]`}
    >
      <ul>
        <li className="my-7">
          <a href="#landing_page">Home</a>
        </li>
        <li className="my-7">
          <a href="#travel">Travel</a>
        </li>
        <li className="my-7">
          <a href="#accommodation">Accommodation</a>
        </li>
        <li className="my-7">
          <a href="#faqs">FAQs</a>
        </li>
        <li className="my-7">
          <a href="#rsvp">RSVP</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
