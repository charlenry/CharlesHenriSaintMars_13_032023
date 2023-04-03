import PropTypes from "prop-types";

/**
 * A function component that renders a home page's feature.
 * Component's Hierarchy: Home > FeatureItem
 * 
 * @component
 * @name FeatureItem
 * @kind function
 * @param {string} iconSrc - The icon source
 * @param {string} title - The title of the feature
 * @param {string} content - The content of the feature
 * @returns { JSX.Element }
 */
const FeatureItem = ({iconSrc, title, content}) => {
  return (
    <div className="feature-item">
      <img src={iconSrc} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

// PropTypes
FeatureItem.propTypes = {
  iconSrc: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default FeatureItem;
