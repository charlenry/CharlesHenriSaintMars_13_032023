import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

/**
 * A function component that returns a JSX element.
 * It renders the page not found.
 *
 * @component
 * @name NotFound
 * @kind function
 * @param { any } props - No props
 * @returns { JSX.Element }
 */
const NotFound = (props) => {
  

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="notfound">
          <p>Désolé, cette page n'existe pas.</p>
          <NavLink to="/">Retourner à la page d'accueil</NavLink>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
