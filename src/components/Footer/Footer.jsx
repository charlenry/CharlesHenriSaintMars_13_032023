
/**
 * A function component that renders the footer of each page
 * Component's Hierarchy: Every pages
 * 
 * @component
 * @name Footer
 * @kind function
 * @param {*} props - No props
 * @returns { JSX.Element }
 */
const Footer = (props) => {
  return (
    <footer className="footer">
      <p className="footer-text">Copyright 2023 Argent Bank</p>
    </footer>
  );
}

export default Footer;