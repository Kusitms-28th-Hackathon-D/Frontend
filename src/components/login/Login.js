import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    axios
      .post(process.env.REACT_APP_API + '/auth/signIn', {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        navigate('/');
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setErrorMessage(err.response.data.message);
        }
      });
  };

  return (
    <main className="flex flex-col justify-center items-center text-center w-96 mx-auto">
      <h2 className="text-3xl font-semibold mt-20 text-[#55B68F]">로그인</h2>
      <form className="flex flex-col justify-center items-center mt-10 w-full">
        <label className="block w-full text-start text-sm font-medium text-gray-600" htmlFor="email">
          이메일
        </label>
        <input
          type="email"
          className="w-full border-2 border-[#F2F2F2] mt-2 px-3 py-2 rounded-md text-sm outline-blue-700"
          name="email"
          id="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </form>
      <div className="flex flex-col justify-center items-center mt-5 w-96">
        <label className="block w-full text-start text-sm text-sm font-medium text-gray-600" htmlFor="password">
          비밀번호
        </label>
        <input
          type="password"
          className="w-full border-2 border-[#F2F2F2] mt-2 px-3 py-2 rounded-md text-sm outline-blue-700"
          name="password"
          id="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="mt-5 w-full">
        {errorMessage ? (
          <div className="w-full mb-2 text-start text-sm font-semibold text-red-600">{errorMessage}</div>
        ) : null}
        <button
          className="w-full bg-[#55B68F] px-3 py-2 text-white rounded-full font-medium text-sm"
          onClick={handleLogin}
        >
          로그인
        </button>
      </div>
      <div className="mt-3 text-sm">
        계정이 없으신가요?&nbsp;
        <Link to="/signup" className="text-[#55B68F] font-bold">
          회원가입하기
        </Link>
      </div>
    </main>
  );
};

export default Login;
