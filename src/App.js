import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};

export default App;
