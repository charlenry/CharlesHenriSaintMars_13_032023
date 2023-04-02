import { useNavigate } from 'react-router-dom';

const Account = ({title, amount, description}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/transactions');    
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{`$${amount.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={handleClick}>View transactions</button>
      </div>
    </section>
  );
};

export default Account;
