/**
 * A function component that renders the hero of home page.
 * Component's Hierarchy: Home > Hero
 * 
 * @component
 * @name Hero
 * @kind function
 * @param {*} props - No props
 * @returns { JSX.Element }
 */
const Hero = (props) => {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default Hero;
