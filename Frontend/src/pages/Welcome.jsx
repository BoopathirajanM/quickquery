import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main welcome section */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to QuickQuery</h1>
        <p className="text-gray-700 text-lg mb-6">Your place to ask and answer questions!</p>
        <button
          onClick={goToHome}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
        >
          Enter Q&A Platform
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4">
        <p>QuickQuery is a simplified StackOverflow-style platform built with React and Spring Boot.</p>
        <p>© {new Date().getFullYear()} QuickQuery. All rights reserved.</p>
      </footer>
    </div>
  );
}
