import { useState } from "react";

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
          <p>{amount}</p>
        </td>
        <td>
          <p>{balance}</p>
        </td>
      </tr>
    </>
  );
};

export default Transaction;
