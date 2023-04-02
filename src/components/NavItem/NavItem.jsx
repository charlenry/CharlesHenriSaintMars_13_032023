import { NavLink } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router'
import { logout } from '../../redux/actions';

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

export default NavItem;
