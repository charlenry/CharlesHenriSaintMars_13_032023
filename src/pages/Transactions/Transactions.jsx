import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Transaction from "../../components/Transaction/Transaction";
import BalanceHeader from "../../components/BalanceHeader/BalanceHeader";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * A function component that renders the page of transactions.
 * Component's Hierarchy: Transactions
 * 
 * @component
 * @name Transactions
 * @kind function
 * @param {*} props - No props
 * @returns { JSX.Element }
 */
const Transactions = (props) => {
  const { isConnected, token, firstName } = useSelector((state) => ({
    ...state.loginReducer,
    ...state.profileReducer,
  }));

  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const previousBalance = (state === null) ? 0 : state.previousBalance;
  const accountTitle = (state === null) ? "" : state.accountTitle;
  const accountDesc = (state === null) ? "" : state.accountDesc;
  let balance = (state === null) ? 0 : state.previousBalance;

  /**
   * A function that takes in an amount and returns the balance.
   * 
   * @function
   * @name calcBalance
   * @memberof Transactions
   * @param {number} amount
   * @returns {number}
   */
  const calcBalance = (amount) => {
    return (balance += amount);
  }

  useEffect(() => {
    if (!token || !isConnected) {
      navigate("/");
    }   
  }, [isConnected, token, balance, navigate]);

  return (
    <>
      <Header isConnected={isConnected} firstName={firstName} />

      <main className="main bg-dark">
        <BalanceHeader
          accountName={accountTitle}
          balance={previousBalance}
          description={accountDesc}
        />
    
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>AMOUNT</th>
                <th>BALANCE</th>
              </tr>
            </thead>
            <tbody>
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount={5.00}
                balance={previousBalance}
                transactionType="Electronic"
                category="Food"
                notes=""
              />
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount={10.00}
                balance={calcBalance(5.00)}
                transactionType="Electronic"
                category="Food"
                notes=""
              />
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount={20.00}
                balance={calcBalance(10.00)}
                transactionType="Electronic"
                category="Food"
                notes=""
              />
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount={30.00}
                balance={calcBalance(20.00)}
                transactionType="Electronic"
                category="Food"
                notes=""
              />
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount={40.00}
                balance={calcBalance(30.00)}
                transactionType="Electronic"
                category="Food"
                notes=""
              />
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount={50.00}
                balance={calcBalance(40.00)}
                transactionType="Electronic"
                category="Food"
                notes=""
              />
            </tbody>
          </table>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Transactions;
