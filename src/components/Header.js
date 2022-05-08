import { Navbar, NavbarBrand } from "reactstrap";
import RCCA from "../app/assets/images/RCCA sign.PNG";

const Header = () => {
  return (
    <Navbar light sticky="top" expand="md">
      <NavbarBrand href="/">
        <img
          src={RCCA}
          height="50"
          width="50"
          alt="Rockingham Community Commons"
        />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
