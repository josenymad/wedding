const Navbar = () => {
  return (
    <nav className="fixed z-10 font-berkshire text-white text-xl text-right top-2 right-0 p-2 rounded-l-3xl shadow-[inset_0px_0px_30px_rgba(0,0,0,0.3)]">
      <ul>
        <li className="my-8">
          <a href="#landing_page">Home</a>
        </li>
        <li className="my-8">
          <a href="#travel">Travel</a>
        </li>
        <li className="my-8">
          <a href="#accommodation">Accommodation</a>
        </li>
        <li className="my-8">
          <a href="#faqs">FAQs</a>
        </li>
        <li className="my-8">
          <a href="#rsvp">RSVP</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
