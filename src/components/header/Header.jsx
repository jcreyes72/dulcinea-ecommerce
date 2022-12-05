import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";

const Header = () => {
  const [showMenu, setshowMenu] = useState(true);

  const toggleMenu = () => {
    setshowMenu((prev) => !prev);
  };
  return (
    <nav className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="logo" />
        <span>dulcinea</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>

        {/* <div className={css.menu}> */}
        <ul
          className={css.menu}
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
        {/* </div> */}
        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </nav>
  );
};

export default Header;
