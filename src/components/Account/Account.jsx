import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

/**
 * A function component that renders an account balance.
 * Component's Hierarchy: Dashboard > Account
 * 
 * @component
 * @name Account
 * @kind function
 * @param {string} title - Account title
 * @param {string} accountRef - Account reference
 * @param {number} balance - Account balance
 * @param {string} description - Account description
 * @returns { JSX.Element }
 */
const Account = ({title, accountRef, balance, description}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/transactions', {state:{
      accountTitle: title,
      accountRef: accountRef,
      previousBalance: balance,
      accountDesc: description,
    }});
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{`$${balance.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={handleClick}>View transactions</button>
      </div>
    </section>
  );
};

// PropTypes
Account.propTypes = {
  title: PropTypes.string,
  accountRef: PropTypes.string,
  balance: PropTypes.number,
  description: PropTypes.string,
};

export default Account;
