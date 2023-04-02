import Header from "../../components/Header/Header";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import Footer from "../../components/Footer/Footer";
import Account from "../../components/Account/Account";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Dashboard = (props) => {
  
  const { isConnected, token, firstName, lastName, updateProfileSuccess } = useSelector((state) => ({
      ...state.loginReducer,
      ...state.profileReducer,
    }));

  const navigate = useNavigate();

  console.log("Valeur de isConnected: ", isConnected);
  console.log("Valeur de fistName: ", firstName);
  console.log("Valeur de token: ", token);

  useEffect(() => {
    if (!token || !isConnected) {
      navigate("/login");
    }
  }, [isConnected, token, navigate]);

  return (
    <>
      <Header isConnected={isConnected} firstName={firstName} />
      <main className="main bg-dark">
        <DashboardHeader
          firstName={firstName}
          lastName={lastName}
          token={token}
          updateProfileSuccess={updateProfileSuccess}
        />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount={2082.79}
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount={10928.42}
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount={184.3}
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
