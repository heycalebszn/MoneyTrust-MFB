import { useNavigate } from 'react-router-dom';
import { MessageCircleMore } from 'lucide-react';
import logo from '../../assets/comx-logo.svg'; // You'll need to add your logo

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4 font-roboto relative">
      <div className="w-full max-w-[480px] space-y-8">
        {/* Logo */}
        <div className="text-center mb-12">
          <img src={logo} alt="ComX Logo" className="mx-auto h-12" />
        </div>

        {/* Sign In Section */}
        <div className="bg-white rounded-lg shadow-sm p-10">
          <h1 className="text-[32px] text-center text-gray-900 font-normal mb-2">Sign in to ComX</h1>
          <p className="text-[16px] text-gray-600 text-center mb-8">Welcome to ComX</p>
          
          <button 
            onClick={() => navigate('/signin')}
            className="w-full bg-comx-green text-white py-4 px-4 rounded-[4px] hover:bg-opacity-90 transition-all text-[16px] font-medium"
          >
            Sign in
          </button>
        </div>

        {/* Create Account Section */}
        <div className="bg-white rounded-lg shadow-sm p-10">
          <h2 className="text-2xl text-center text-gray-900 font-normal mb-2">Create an Account</h2>
          <p className="text-sm text-gray-600 text-center mb-8">Join the Family</p>
          
          <button 
            onClick={() => navigate('/register')}
            className="w-full bg-comx-dark text-white py-4 px-4 rounded-[4px] hover:bg-opacity-90 transition-all text-[16px] font-medium"
          >
            Register
          </button>
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

export default WelcomePage;
