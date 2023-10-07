import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
import Navbar from './base/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
