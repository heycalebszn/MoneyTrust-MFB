import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/comx-logo.svg';
import { MessageCircleMore, X } from 'lucide-react';

const OtpValidationPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);
  const userEmail = 'name@mymail.com'; // This should come from your app state or URL params

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 4) {
      setError('OTP Code is invalid');
      return;
    }
    // Add your OTP validation logic here
    console.log('OTP submitted:', otp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4 font-roboto relative">
      <div className="w-full max-w-[480px]">
        {/* Logo */}
        <div className="text-center mb-12">
          <img src={logo} alt="ComX Logo" className="mx-auto h-12" />
        </div>

        {/* OTP Validation Form */}
        <div className="bg-white rounded-lg shadow-sm p-10">
          <h1 className="text-[32px] text-center text-gray-900 font-normal mb-2">Password Reset</h1>
          <p className="text-[16px] text-gray-600 text-center mb-8">
            Reset your password to continue trading on ComX
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Field */}
            <div className="space-y-2">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Enter the 4-digit code that was sent to {userEmail}
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  if (value.length <= 4) setOtp(value);
                  if (error) setError(null);
                }}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green"
                placeholder="Enter code"
                required
              />
            </div>

            {/* Resend Code Link */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => {/* Add resend logic */}}
                className="text-gray-400 text-sm hover:text-gray-600"
              >
                Resend Code
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 flex justify-between items-center">
                <span className="text-red-600 text-sm">{error}</span>
                <button
                  type="button"
                  onClick={() => setError(null)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            <div className="flex justify-between space-x-4 mt-8">
              {/* Back Button */}
              <button
                type="button"
                onClick={() => navigate('/signin/password-reset')}
                className="w-full bg-gray-50 text-gray-900 py-3 px-4 rounded-[4px] hover:bg-gray-100 transition-all text-[16px] font-medium uppercase"
              >
                Back
              </button>

              {/* Finish Button */}
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-4 rounded-[4px] hover:bg-red-700 transition-all text-[16px] font-medium uppercase"
              >
                Finish
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Support Center Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-red-600 transition-colors"
          onClick={() => {/* Add support center functionality */}}
        >
          <MessageCircleMore
            className="w-12 h-12 text-white" 
            strokeWidth={2.5}
          />
        </button>
      </div>
    </div>
  );
};

export default OtpValidationPage; 