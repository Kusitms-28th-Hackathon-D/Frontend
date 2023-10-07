import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};

export default App;
