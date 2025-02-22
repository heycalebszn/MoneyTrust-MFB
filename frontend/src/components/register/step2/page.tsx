import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/comx-logo.svg';
import { MessageCircleMore } from 'lucide-react';
import ProgressSlider from '../../shared/ProgressSlider';

type FormErrors = {
  companyEmail?: string;
  password?: string;
  confirmPassword?: string;
};

const RegisterStep2Page = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyEmail: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError(null); // Clear previous errors
    
    // Basic validation
    const newErrors: FormErrors = {};
    
    if (!formData.companyEmail) {
      setGlobalError('Please fill in all required fields');
      newErrors.companyEmail = 'Company email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.companyEmail)) {
      setGlobalError('Please correct the errors below');
      newErrors.companyEmail = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate('/register/step3');
  };

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4 font-roboto relative">
      <div className="w-full max-w-[480px]">
        <div className="text-center mb-12">
          <img src={logo} alt="ComX Logo" className="mx-auto h-12" />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-10">
          {globalError && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-6">
              <span className="text-red-600 text-sm">{globalError}</span>
            </div>
          )}
          
          <h1 className="text-[32px] text-center text-gray-900 font-normal mb-2">
            Register Corporate Account
          </h1>
          <p className="text-[16px] text-gray-600 text-center mb-8">
            Please provide your company email and set a password
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Email Field */}
            <div className="space-y-2">
              <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">
                Company Email
              </label>
              <input
                type="email"
                id="companyEmail"
                value={formData.companyEmail}
                onChange={handleInputChange('companyEmail')}
                className={`w-full px-3 py-2 bg-white border ${
                  errors.companyEmail ? 'border-red-300' : 'border-gray-300'
                } text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green`}
                placeholder="Enter company email"
              />
              {errors.companyEmail && (
                <p className="text-red-600 text-xs mt-1">{errors.companyEmail}</p>
              )}
            </div>

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
                className={`w-full px-3 py-2 bg-white border ${
                  errors.password ? 'border-red-300' : 'border-gray-300'
                } text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green`}
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-red-600 text-xs mt-1">{errors.password}</p>
              )}
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
                className={`w-full px-3 py-2 bg-white border ${
                  errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                } text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green`}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className="text-red-600 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <ProgressSlider currentStep={2} totalSteps={4} />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-4 rounded-[4px] hover:bg-red-700 transition-all text-[16px] font-medium uppercase mt-4"
            >
              Next Step
            </button>
          </form>
        </div>
      </div>

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