import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/welcome/page';
import SignInPage from './components/signin/page';
import PasswordResetPage from './components/signin/password-reset/page';
import OtpValidationPage from './components/signin/password-reset/otp-validation/page';
import DashboardPage from './components/dashboard/page';
import RegisterPage from './components/register/page';
import RegisterStep2Page from './components/register/step2/page'
import RegisterStep3Page from './components/register/step3/page';
import RegisterStep4Page from './components/register/step4/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signin/password-reset" element={<PasswordResetPage />} />
        <Route path="/signin/password-reset/otp" element={<OtpValidationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/step2" element={<RegisterStep2Page />} />
        <Route path="/register/step3" element={<RegisterStep3Page />} />
        <Route path="/register/step4" element={<RegisterStep4Page />} />
      </Routes>
    </Router>
  );
}

export default App;
