import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import PropTypes from "prop-types";

/**
 A function component that renders the header of each page
 * Component's Hierarchy: Every pages
 * 
 * @component
 * @name Header
 * @kind function
 * @param {boolean} isConnected - A boolean that tells if the user is connected.
 * @param {string} firstName - The user's first name
 * @returns { JSX.Element }
 */

const Header = ({ isConnected, firstName }) => {
  return (
    <>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        {isConnected ? (
          <>
            <div className="navitem-container">
              <NavItem
                target="#"
                icon="fa fa-user-circle"
                navItemText={firstName}
              />

              <NavItem
                target="/"
                icon="fa fa-sign-out"
                navItemText="Sign&nbsp;Out"
                signOut={true}
              />
            </div>
          </>
        ) : (
          <div>
            <NavItem
              target="/login"
              icon="fa fa-user-circle"
              navItemText="Sign&nbsp;In"
            />
          </div>
        )}
      </nav>
    </>
  );
};

// PropTypes
Header.propTypes = {
  isConnected: PropTypes.bool,
  firstName: PropTypes.string,
};

export default Header;
