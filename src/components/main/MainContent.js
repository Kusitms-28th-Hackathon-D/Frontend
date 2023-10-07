import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <main className="text-center pt-10">
      <h1 className="text-5xl font-bold">메인 페이지</h1>
      <Link to="/test" className="block underline mt-5 text-blue-800">
        테스트 페이지로 이동하기
      </Link>
      <Link to="/login" className="block underline mt-3 text-blue-800">
        로그인 페이지로 이동하기
      </Link>
      <Link to="/signup" className="block underline mt-3 text-blue-800">
        회원가입 페이지로 이동하기
      </Link>
    </main>
  );
};

export default MainContent;
