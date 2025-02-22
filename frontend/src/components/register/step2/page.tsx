import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../../../assets/comx-logo.svg';
import { MessageCircleMore } from 'lucide-react';
import ProgressSlider from '../../shared/ProgressSlider';

type FormErrors = {
  password?: string;
  confirmPassword?: string;
  phone?: string;
};

const RegisterStep2Page = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    phone: '',
    countryCode: '+234'
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setGlobalError('Passwords do not match');
      return;
    }
    
    if (!formData.phone) {
      setGlobalError('Phone number is required');
      return;
    }

    navigate('/register/step3');
  };

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4 font-roboto relative">
      <div className="w-full max-w-[480px]">
        {/* Logo */}
        <div className="text-center mb-12">
          <img src={logo} alt="ComX Logo" className="mx-auto h-12" />
        </div>

        {/* Add Global Error Display */}
        {globalError && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-6">
            <span className="text-red-600 text-sm">{globalError}</span>
          </div>
        )}

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-sm p-10">
          <h1 className="text-[32px] text-center text-gray-900 font-normal mb-2">Register new account</h1>
          <p className="text-[16px] text-gray-600 text-center mb-8">
            Sign up for an account and start trading today
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange('password')}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange('confirmPassword')}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green"
                placeholder="Confirm Password"
              />
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="flex gap-2">
                <div className="relative">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="appearance-none bg-white border border-gray-300 text-black rounded-md py-2 pl-3 pr-8 focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green"
                  >
                    <option value="+234">+234</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <ProgressSlider currentStep={2} totalSteps={4} />

            {/* Verify Account Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-4 rounded-[4px] hover:bg-red-700 transition-all text-[16px] font-medium uppercase mt-4"
            >
              Verify Account
            </button>
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

export default RegisterStep2Page; 