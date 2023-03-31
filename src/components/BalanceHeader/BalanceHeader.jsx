
const BalanceHeader = ({accountName, balance, description}) => {
  return (
    <div className="transactionAmount">
          <p>{accountName}</p>
          <h1>{`$${balance.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</h1>
          <p>{description}</p>
        </div>
  );
}

export default BalanceHeader;