import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { login } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/**
 * A function component that renders the sign in form.
 * Component's Hierarchy: SignIn
 * 
 * @component
 * @name SignIn
 * @kind function
 * @param {*} props - No props
 * @returns { JSX.Element }
 */
const SignIn = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isConnected, loginError } = useSelector(state => ({
    ...state.loginReducer,
    ...state.profileReducer
  }))

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  useEffect(() => {
    if (isConnected) {
      navigate('/profile')
    }
  }, [isConnected, navigate])

  return (
    <>
      <Header isConnected={isConnected} />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1 className="signin-title">Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input 
                type="email" 
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {loginError && <p className="login-error">Invalid credentials</p>}
            <button className="sign-in-button" onClick={(e) => handleSubmit(e)} >Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
