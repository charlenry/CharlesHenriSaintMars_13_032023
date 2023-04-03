import './style/App.scss';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import SignIn from './pages/SignIn/SignIn';
import Transactions from './pages/Transactions/Transactions';
import NotFound from './pages/NotFound/NotFound';
import {Routes, Route} from 'react-router-dom';


/**
 * A function that returns a JSX element.
 * Returns the routes of the pages.
 * 
 * @component
 * @name App
 * @kind function
 * @returns { JSX.Element }
 */
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
