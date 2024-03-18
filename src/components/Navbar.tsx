const Navbar = () => {
  return (
    <nav className="fixed z-10 font-berkshire text-white text-xl right-0 p-2 rounded-l-3xl shadow-[inset_0_12px_10px_1px_rgba(0,0,0,0.3)]">
      <ul className="flex">
        <li className="mx-4">
          <a href="#landing_page">Home</a>
        </li>
        <li className="mx-4">
          <a href="#travel">Travel</a>
        </li>
        <li className="mx-4">
          <a href="#accommodation">Accommodation</a>
        </li>
        <li className="mx-4">
          <a href="#faqs">FAQs</a>
        </li>
        <li className="mx-4">
          <a href="#rsvp">RSVP</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
