import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/welcome/page';
import SignInPage from './components/signin/page';
import PasswordResetPage from './components/signin/password-reset/page';
import DashboardPage from './components/dashboard/page';
import RegisterPage from './components/register/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signin/password-reset" element={<PasswordResetPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
