import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./Header.css";
import Logo from "../../assets/hero-img-removebg-preview.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div
          className="menu-btn"
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} className="bars-icon" />
        </div>
      ) : (
        <div className="mobile-menu-wrapper">
          {mobile && (
            <FaTimes
              className="close-icon"
              size={28}
              onClick={() => setMenuOpened(false)}
            />
          )}
          <ul className="header-menu">
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="program"
                spy={true}
                smooth={true}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="resons"
                spy={true}
                smooth={true}
              >
                Why us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="plans"
                spy={true}
                smooth={true}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="testimonials"
                spy={true}
                smooth={true}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
