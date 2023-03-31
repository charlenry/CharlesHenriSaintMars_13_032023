import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Transaction from "../../components/Transaction/Transaction";

const Transactions = (props) => {
  return (
    <>
      <Header isConnected={true} firstName="Tony" />
      <main className="main bg-dark">
        <div className="transactionAmount">
          <p>Argent Bank Checking (x8349)</p>
          <h1>$2,082.79</h1>
          <p>Available Balance</p>
        </div>
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
                amount="$5.00"
                balance="$2082.79"
                transactionType="Electronic"
                category="Food"
                notes=""
              />
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount="$10.00"
                balance="$2087.79"
                transactionType="Electronic"
                category="Food"
                notes=""
              />
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount="$20.00"
                balance="$2097.79"
                transactionType="Electronic"
                category="Food"
                notes=""
              />
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount="$30.00"
                balance="$2117.79"
                transactionType="Electronic"
                category="Food"
                notes=""
              />
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount="$40.00"
                balance="$2147.79"
                transactionType="Electronic"
                category="Food"
                notes=""
              />
              <Transaction
                date="June 20th, 2020"
                description="Golden Sun Bakery"
                amount="$50.00"
                balance="$2187.79"
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
