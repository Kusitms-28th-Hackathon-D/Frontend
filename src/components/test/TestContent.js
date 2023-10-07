import { Link } from 'react-router-dom';

const TestContent = () => {
  return (
    <main className="text-center pt-10">
      <h1 className="text-5xl font-bold">테스트 페이지</h1>
      <Link to="/" className="block underline mt-5 text-blue-800">
        메인 페이지로 이동하기
      </Link>
      <div className="h-[1000px]"></div>
    </main>
  );
};

export default TestContent;
