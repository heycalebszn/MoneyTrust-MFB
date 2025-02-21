import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/comx-logo.svg';
import { MessageCircleMore } from 'lucide-react';

const PasswordResetPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your password reset logic here
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4 font-roboto relative">
      <div className="w-full max-w-[480px]">
        {/* Logo */}
        <div className="text-center mb-12">
          <img src={logo} alt="ComX Logo" className="mx-auto h-12" />
        </div>

        {/* Password Reset Form */}
        <div className="bg-white rounded-lg shadow-sm p-10">
          <h1 className="text-[32px] text-center text-gray-900 font-normal mb-2">Password Reset</h1>
          <p className="text-[16px] text-gray-600 text-center mb-8">
            Reset your password to continue trading on ComX
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Enter the Email Address you registered with
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green"
                placeholder="Enter your email"
                required
              />
            </div>

            <p className="text-sm text-gray-500 italic mt-2">
              Note that you'll be sent an OTP to the email address provided
            </p>

            <div className="flex justify-between space-x-4 mt-8">
              {/* Back Button */}
              <button
                type="button"
                onClick={() => navigate('/signin')}
                className="w-full bg-gray-50 text-gray-900 py-3 px-4 rounded-[4px] hover:bg-gray-100 transition-all text-[16px] font-medium uppercase"
              >
                Back
              </button>

              {/* Proceed Button */}
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-4 rounded-[4px] hover:bg-red-700 transition-all text-[16px] font-medium uppercase"
              >
                Proceed
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

export default PasswordResetPage;

