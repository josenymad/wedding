import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const MobileNavbar = () => {
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
    >
      <a href="#landing_page" onClick={closeMobileMenu}>
        Home
      </a>
      <a href="#travel" onClick={closeMobileMenu}>
        Travel
      </a>
      <a href="#accommodation" onClick={closeMobileMenu}>
        Accommodation
      </a>
      <a href="#faqs" onClick={closeMobileMenu}>
        FAQs
      </a>
      <a href="#rsvp" onClick={closeMobileMenu}>
        RSVP
      </a>
    </Menu>
  );
};

export default MobileNavbar;
