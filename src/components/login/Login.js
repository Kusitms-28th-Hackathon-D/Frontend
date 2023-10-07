import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center w-96 mx-auto">
      <h2 className="text-2xl font-semibold mt-20">로그인</h2>
      <div className="flex flex-col justify-center items-center mt-10 w-full">
        <label className="block w-full text-start text-sm font-medium text-gray-600" for="email">
          이메일
        </label>
        <input
          type="email"
          className="w-full border-2 border-gray-300 mt-2 px-3 py-2 rounded-md text-sm outline-blue-700"
          name="email"
          id="email"
          placeholder="이메일"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-5 w-96">
        <label className="block w-full text-start text-sm text-sm font-medium text-gray-600" for="email">
          비밀번호
        </label>
        <input
          type="password"
          className="w-full border-2 border-gray-300 mt-2 px-3 py-2 rounded-md text-sm outline-blue-700"
          name="email"
          id="email"
          placeholder="비밀번호"
        />
      </div>
      <button className="w-full mt-5 bg-blue-700 px-3 py-2 text-white rounded-md font-medium text-sm">로그인</button>
      <div className="mt-3 text-sm">
        계정이 없으신가요?&nbsp;
        <Link to="/signup" className="text-blue-700 font-bold">
          회원가입하기
        </Link>
      </div>
    </main>
  );
};

export default Login;
