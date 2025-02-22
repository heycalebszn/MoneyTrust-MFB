import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import logo from '../../assets/comx-logo.svg';
import { MessageCircleMore } from 'lucide-react';
import ProgressSlider from '../shared/ProgressSlider';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  businessType?: string;
  incorporationDate?: string;
  password?: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  businessType: string;
  incorporationDate: string;
  password: string;
};

type BusinessOption = {
  value: string;
  label: string;
};

const businessOptions: BusinessOption[] = [
  { value: 'llc', label: 'Limited Liability Company' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'corporation', label: 'Corporation' }
];

const RegisterPage = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState<'Individual' | 'Corporate'>('Individual');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    businessType: '',
    incorporationDate: '',
    password: ''
  });
  const [date, setDate] = useState<Date | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (accountType === 'Individual') {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'This field is required.';
      }
      
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'This field is required.';
      } else if (/^\d/.test(formData.lastName)) {
        newErrors.lastName = 'Last Name cannot start with a number.';
      }
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is incorrect.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is incorrect.';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (accountType === 'Corporate') {
      if (!formData.businessType) newErrors.businessType = 'Business type is required';
      if (!formData.incorporationDate) newErrors.incorporationDate = 'Date of incorporation is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Registration successful
          navigate('/register/step2');
        } else {
          // Registration failed
          setGlobalError(data.msg || 'Registration failed');
        }
      } catch (error) {
        setGlobalError('Network error occurred');
      }
    } else {
      setGlobalError('Please fix the errors in the form');
    }
  };

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
    if (globalError) {
      setGlobalError(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4 font-roboto relative">
      <div className="w-full max-w-[480px]">
        {/* Logo */}
        <div className="text-center mb-12">
          <img src={logo} alt="ComX Logo" className="mx-auto h-12" />
        </div>

        {/* Global Error Message */}
        {globalError && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3 flex justify-between items-center mb-6">
            <span className="text-red-600 text-sm">{globalError}</span>
            <button
              type="button"
              onClick={() => setGlobalError(null)}
              className="text-red-600 hover:text-red-700 bg-white"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-sm p-10">
          <h1 className="text-[32px] text-center text-gray-900 font-normal mb-2">Register new account</h1>
          <p className="text-[16px] text-gray-600 text-center mb-8">
            Sign up for an account and start trading today
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Account Type Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Select select the category that best describes you
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setAccountType('Individual')}
                  className={`py-3 px-4 text-center rounded-md ${
                    accountType === 'Individual'
                      ? 'bg-[#231F20] text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                >
                  Individual
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('Corporate')}
                  className={`py-3 px-4 text-center rounded-md ${
                    accountType === 'Corporate'
                      ? 'bg-[#231F20] text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                >
                  Corporate
                </button>
              </div>
            </div>

            {accountType === 'Individual' ? (
              <>
                {/* Individual Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      Your First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange('firstName')}
                      className={`w-full px-3 py-2 bg-white border ${
                        errors.firstName ? 'border-red-300' : 'border-gray-300'
                      } text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green`}
                      placeholder="Enter your First Name"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Your Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange('lastName')}
                      className={`w-full px-3 py-2 bg-white border ${
                        errors.lastName ? 'border-red-300' : 'border-gray-300'
                      } text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green`}
                      placeholder="Enter your Last Name"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email Field for Individual */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className={`w-full px-3 py-2 bg-white border ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    } text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1">{errors.email}</p>
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
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <p className="text-red-600 text-xs mt-1">{errors.password}</p>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Corporate Fields */}
                {/* Company Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Company Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className={`w-full px-3 py-2 bg-white border ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    } text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green`}
                    placeholder="Enter company email"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1">{errors.email}</p>
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

                {/* Business Type Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Type of Business
                  </label>
                  <Select<BusinessOption>
                    value={businessOptions.find(option => option.value === formData.businessType)}
                    onChange={(option) => {
                      if (option) {
                        setFormData({ ...formData, businessType: option.value });
                        if (errors.businessType) {
                          setErrors({ ...errors, businessType: undefined });
                        }
                      }
                    }}
                    options={businessOptions}
                    className="text-black"
                    classNames={{
                      control: () => 
                        `!bg-white !border ${errors.businessType ? '!border-red-300' : '!border-gray-300'} !rounded-md !shadow-none`,
                      option: ({ isFocused }) =>
                        `!text-gray-900 ${isFocused ? '!bg-gray-100' : '!bg-white'}`,
                    }}
                    placeholder="Select Type of Business"
                  />
                  {errors.businessType && (
                    <p className="text-red-600 text-xs mt-1">{errors.businessType}</p>
                  )}
                </div>

                {/* Date of Incorporation Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Incorporation
                  </label>
                  <DatePicker
                    selected={date}
                    onChange={(newDate: Date | null) => {
                      setDate(newDate);
                      if (newDate) {
                        setFormData({
                          ...formData,
                          incorporationDate: newDate.toISOString().split('T')[0]
                        });
                      }
                      if (errors.incorporationDate) {
                        setErrors({ ...errors, incorporationDate: undefined });
                      }
                    }}
                    className={`w-full px-3 py-2 bg-white border ${
                      errors.incorporationDate ? 'border-red-300' : 'border-gray-300'
                    } text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green`}
                    placeholderText="Select date"
                    dateFormat="MMMM d, yyyy"
                  />
                  {errors.incorporationDate && (
                    <p className="text-red-600 text-xs mt-1">{errors.incorporationDate}</p>
                  )}
                </div>
              </>
            )}

            <ProgressSlider currentStep={1} totalSteps={4} />

            {/* Next Step Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-4 rounded-[4px] hover:bg-red-700 transition-all text-[16px] font-medium uppercase mt-4"
            >
              Next Step
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

export default RegisterPage;