import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-normal mb-6 text-center">Create Your Account</h1>
        
        {/* Add your registration form here */}
        <div className="space-y-4">
          {/* You can add form fields here */}
        </div>

        <button
          onClick={() => navigate('/')}
          className="mt-6 w-full bg-[#231F20] text-white py-3 rounded-md hover:bg-black transition-colors"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );
};

export default RegisterPage; 