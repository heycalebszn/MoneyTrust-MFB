import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="content">
        {/* Add your dashboard content here */}
      </div>
      <button onClick={() => navigate('/')}>
        Back to Welcome
      </button>
    </div>
  );
};

export default DashboardPage; 