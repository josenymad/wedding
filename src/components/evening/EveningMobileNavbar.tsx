import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const EveningMobileNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <Menu
      right
      customBurgerIcon={<RxHamburgerMenu />}
      customCrossIcon={<RxCross1 />}
      isOpen={mobileMenuOpen}
      onOpen={handleMobileMenu}
      onClose={handleMobileMenu}
      width={200}
    >
      <Link to="/" onClick={closeMobileMenu}>
        Home
      </Link>
      <Link to="camping" onClick={closeMobileMenu}>
        Camping
      </Link>
      <Link to="plans-for-the-day" onClick={closeMobileMenu}>
        Plans for the day
      </Link>
      <Link to="rsvp" onClick={closeMobileMenu}>
        RSVP
      </Link>
    </Menu>
  );
};

export default EveningMobileNavbar;
