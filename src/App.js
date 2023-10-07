import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/base/Navbar';
import Option from './components/signup/Option';
import Ranking from './components/signup/Ranking';
import GroupDetailPage from './pages/GroupDetailPage';
import MyPage from './pages/MyPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/2" element={<Option />} />
        <Route path="/signup/3" element={<Ranking />} />
        <Route path="/group/1" element={<GroupDetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
