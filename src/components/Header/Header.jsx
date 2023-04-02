import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import NavItem from "../NavItem/NavItem";

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
            <div>
              <NavItem
                target="#"
                icon="fa fa-user-circle"
                navItemText={firstName}
              />

              <NavItem
                target="/"
                icon="fa fa-sign-out"
                navItemText="Sign Out"
                signOut={true}
              />
            </div>
          </>
        ) : (
          <div>
            <NavItem
              target="/login"
              icon="fa fa-user-circle"
              navItemText="Sign In"
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
