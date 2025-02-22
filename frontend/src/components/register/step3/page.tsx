import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/comx-logo.svg';
import { MessageCircleMore } from 'lucide-react';
import ProgressSlider from '../../shared/ProgressSlider';

type FormErrors = {
  otp?: string;
};

const RegisterStep3Page = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const contactInfo = {
    phone: '+2347726394482',
    email: 'name@mymail.com'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 4) {
      navigate('/register/step4');
    } else {
      setErrors({ otp: 'Please enter a valid 4-digit code' });
    }
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 4) {
      setOtp(value);
      if (errors.otp) setErrors({});
    }
  };

  const handleResendCode = () => {
    // Add resend code logic here
    console.log('Resending code...');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4 font-roboto relative">
      <div className="w-full max-w-[480px]">
        {/* Logo */}
        <div className="text-center mb-12">
          <img src={logo} alt="ComX Logo" className="mx-auto h-12" />
        </div>

        {/* Account Details Form */}
        <div className="bg-white rounded-lg shadow-sm p-10">
          <h1 className="text-[32px] text-center text-gray-900 font-normal mb-2">Account details</h1>
          <p className="text-[16px] text-gray-600 text-center mb-8">
            Sign up for an account and start trading today
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Field */}
            <div className="space-y-2">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Enter the 4-digit code that was sent to {contactInfo.phone} and {contactInfo.email}
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
                className={`w-full px-3 py-2 bg-white border ${
                  errors.otp ? 'border-red-300' : 'border-gray-300'
                } text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green`}
                placeholder="Enter code"
              />
              {errors.otp && (
                <p className="text-red-600 text-xs mt-1">{errors.otp}</p>
              )}
            </div>

            {/* Resend Code Link */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleResendCode}
                className="text-gray-400 text-sm hover:text-gray-600 bg-white"
              >
                Resend Code
              </button>
            </div>

            <ProgressSlider currentStep={3} totalSteps={4} />

            <div className="flex justify-between items-center mt-8">
              <button
                type="button"
                onClick={() => navigate('/register/step2')}
                className="text-gray-900 font-medium uppercase hover:underline bg-white"
              >
                Back
              </button>

              <button
                type="submit"
                className="text-red-600 font-medium uppercase hover:text-red-700 bg-white"
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

export default RegisterStep3Page; 