import Header from "../../components/Header/Header";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import Footer from "../../components/Footer/Footer";
import Account from "../../components/Account/Account";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * A function component that renders the user's dashboard (profile).
 * Component's Hierarchy: Dashboard
 *
 * @component
 * @name Dashboard
 * @kind function
 * @param {*} props - No props
 * @returns { JSX.Element }
 */
const Dashboard = (props) => {
  const { isConnected, token, firstName, lastName, updateProfileSuccess } = useSelector((state) => ({
      ...state.loginReducer,
      ...state.profileReducer,
    }));

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !isConnected) {
      navigate("/");
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
          accountRef="x8349"
          balance={2082.79}
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          accountRef="x6712"
          balance={10928.42}
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8350)"
          accountRef="x8350"
          balance={184.3}
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
