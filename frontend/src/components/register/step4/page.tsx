import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/comx-logo.svg';
import { MessageCircleMore } from 'lucide-react';
import ProgressSlider from '../../shared/ProgressSlider';
import successImage from '../../../assets/success.svg'; // You'll need to add this image

const RegisterStep4Page = () => {
  const navigate = useNavigate();
  const userName = 'John'; // This should come from your app state

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4 font-roboto relative">
      <div className="w-full max-w-[600px]">
        {/* Logo */}
        <div className="text-center mb-12">
          <img src={logo} alt="ComX Logo" className="mx-auto h-12" />
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-lg shadow-sm p-12">
          {/* Success Illustration */}
          <div className="flex justify-center mb-10">
            <img 
              src={successImage} 
              alt="Registration Complete" 
              className="w-56 h-56"
            />
          </div>

          <h1 className="text-3xl text-center text-gray-900 font-normal mb-3">
            Registration Complete
          </h1>
          
          <div className="text-center space-y-1 mb-10">
            <p className="text-[13px] text-gray-600">
              Dear {userName}, Your registration is now complete.
            </p>
            <p className="text-[13px] text-gray-600">
              You may proceed to your dashboard and start trading commodities.
            </p>
          </div>

          {/* Dashboard Button */}
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-white text-red-600 py-3 px-4 rounded-[4px] transition-all text-[15px] font-medium uppercase mb-8"
          >
            Go to Dashboard
          </button>

          <ProgressSlider currentStep={4} totalSteps={4} />
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

export default RegisterStep4Page; 