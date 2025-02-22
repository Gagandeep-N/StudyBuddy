import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import PopUp from './components/PopUp/PopUp';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/popup" element={<PopUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
