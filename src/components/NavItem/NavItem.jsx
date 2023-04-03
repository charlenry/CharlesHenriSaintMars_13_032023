import { NavLink } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions';
import PropTypes from "prop-types";

/**
 * A function component that renders elements in the header of the pages.
 * Component's Hierarchy: (Home | SignIn | Dashboard | Transactions) > Header > NavItem
 * 
 * @component
 * @name NavItem
 * @kind function
 * @param {string} target - The target of the link
 * @param {string} icon - The fontawesome class of the icon of the link
 * @param {string} navItemText - The text of the link
 * @param {boolean} signOut - A boolean that tells if the link is relative to log out.
 * @returns { JSX.Element }
 */

const NavItem = ({target, icon, navItemText, signOut}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    if (signOut) {
      dispatch(logout());
      navigate('/')
    }
  }

  return (
    <>
      <NavLink className="main-nav-item" to={target} onClick={handleLogout}>
        <i className={icon}></i>
        {navItemText}
      </NavLink>
    </>
  );
};

// PropTypes
NavItem.propTypes = {
  target: PropTypes.string,
  icon: PropTypes.string,
  navItemText: PropTypes.string,
  signOut: PropTypes.bool,
};

export default NavItem;
