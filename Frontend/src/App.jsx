import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AskQuestion from './pages/AskQuestion';
import ViewQuestion from './pages/ViewQuestion';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/question/:id" element={<ViewQuestion />} />
      </Routes>
    </div>
  );
}

export default App;
