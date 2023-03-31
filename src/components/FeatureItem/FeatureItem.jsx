const FeatureItem = ({iconSrc, title, content}) => {
  return (
    <div className="feature-item">
      <img src={iconSrc} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default FeatureItem;
