import PropTypes from "prop-types";

/**
 * A function component that renders the balance header of the component Transactions.
 * Component's Hierarchy: Transactions > BalanceHeader
 * 
 * @component
 * @name BalanceHeader
 * @kind function
 * @param {string} accountName - Account name
 * @param {number} balance - Account balance
 * @param {string} description - Account description
 * @returns { JSX.Element }
 */
const BalanceHeader = ({accountName, balance, description}) => {
  return (
    <div className="transactionAmount">
          <p>{accountName}</p>
          <h1>{`$${balance.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</h1>
          <p>{description}</p>
        </div>
  );
}

// PropTypes
BalanceHeader.propTypes = {
  accountName: PropTypes.string,
  balance: PropTypes.number,
  description: PropTypes.string,
};

export default BalanceHeader;