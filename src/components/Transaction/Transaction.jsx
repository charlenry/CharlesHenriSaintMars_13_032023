import { useState } from "react";
import PropTypes from "prop-types";

/**
 * A function component that renders a transaction.
 * Component's Hierarchy: Transactions > Transaction
 * 
 * @component
 * @name Transaction
 * @kind function
 * @param {string} date - The date of the transaction
 * @param {string} description - The description of the transaction
 * @param {number} amount - The amount of the transaction
 * @param {number} balance - The balance of the transaction
 * @param {string} transactionType - The transaction type
 * @param {string} category - The transaction category
 * @param {string} notes - The transaction note
 * @returns { JSX.Element }
 */
const Transaction = ({date, description, amount, balance, transactionType, category, notes}) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <tr>
        <td>
          <p className="chevron-container" onClick={changeState}>
            {isOpen ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </p>
        </td>
        <td>
          <p>{date}</p>
          <div className={isOpen ? "dropdown open" : "dropdown"}>
            <p>Transaction Type: {transactionType}</p>
            <p>Category: {category} <i className="fas fa-pen" title="Allows the user to edit to a Select Dropdown."></i></p>
            <p>Notes: {notes} <i className="fas fa-pen" title="Allows the user to add or edit notes via a Text Input."></i></p>
          </div>
        </td>
        <td>
          <p>{description}</p>
        </td>
        <td>
          <p>{`$${amount.toFixed(2)}`}</p>
        </td>
        <td>
          <p>{`$${balance.toFixed(2)}`}</p>
        </td>
      </tr>
    </>
  );
};

// PropTypes
Transaction.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  balance: PropTypes.number,
  transactionType: PropTypes.string,
  category: PropTypes.string,
  notes: PropTypes.string,
};

export default Transaction;
