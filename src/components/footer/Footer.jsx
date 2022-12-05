import css from "./Footer.module.css";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
          <span>sello</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>12th St. Kennedy Estate, 7 mile</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>12th St. Kennedy Estate, 7 mile</span>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <span>12th St. Kennedy Estate, 7 mile</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>12th St. Kennedy Estate, 7 mile</span>
            </span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>12th St. Kennedy Estate, 7 mile</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <span>12th St. Kennedy Estate, 7 mile</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright © 2022 by Sello,inc</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
