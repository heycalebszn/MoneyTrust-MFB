import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/comx-logo.svg';
import { MessageCircleMore } from 'lucide-react';

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    staySignedIn: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Sign in attempted with:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4 font-roboto relative">
      <div className="w-full max-w-[480px]">
        {/* Logo */}
        <div className="text-center mb-12">
          <img src={logo} alt="ComX Logo" className="mx-auto h-12" />
        </div>

        {/* Sign In Form */}
        <div className="bg-white rounded-lg shadow-sm p-10">
          <h1 className="text-[32px] text-center text-gray-900 font-normal mb-2">Sign in to ComX</h1>
          <p className="text-[16px] text-gray-600 text-center mb-8">Enter your login credentials below.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green"
                placeholder="Enter your Email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Your Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-gray-300 text-black rounded-md focus:outline-none focus:ring-1 focus:ring-comx-green focus:border-comx-green"
                placeholder="********"
                required
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={formData.staySignedIn}
                  onChange={(e) => setFormData({ ...formData, staySignedIn: e.target.checked })}
                  className="h-4 w-4 appearance-none bg-white border border-gray-300 rounded text-comx-green checked:bg-comx-green checked:border-transparent focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Stay Signed in
                </label>
              </div>
              <div>
                <a 
                  onClick={() => navigate('/signin/password-reset')} 
                  className="text-red-600 text-sm hover:text-red-500 cursor-pointer"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-comx-green text-white py-3 px-4 rounded-[4px] hover:bg-opacity-90 transition-all text-[16px] font-medium mt-8"
            >
              Sign in
            </button>

            {/* Back Button */}
            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full bg-gray-50 text-gray-700 py-3 px-4 rounded-[4px] hover:bg-gray-100 transition-all text-[16px] font-medium"
            >
              Back
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

export default SignInPage; 