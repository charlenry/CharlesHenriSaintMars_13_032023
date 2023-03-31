import { NavLink } from "react-router-dom";

const NavItem = ({target, icon, navItemText}) => {
  return (
    <>
      <NavLink className="main-nav-item" to={target}>
        <i className={icon}></i>
        {navItemText}
      </NavLink>
    </>
  );
};

export default NavItem;
