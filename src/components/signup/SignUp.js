import { useState } from 'react';
import { Link } from 'react-router-dom';

const ValidationInitialState = {
  email: false,
  password: false,
  Vpassword: false,
};

const SignUp = () => {
  const [email, setEmail] = useState();
  const [passwd, setPasswd] = useState();
  const [validation, setValidation] = useState(ValidationInitialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
      setValidation({
        ...validation,
        email: true,
      });
    }
    if (name === 'password') {
      setPasswd(value);
      setValidation({
        ...validation,
        password: true,
      });
    }
    if (name === 'Vpassword') {
      if (passwd === value) {
        setValidation({
          ...validation,
          Vpassword: true,
        });
      } else {
        setValidation({
          ...validation,
          Vpassword: false,
        });
      }
    }
  };

  const handleClickNext = () => {
    if (!Object.values(validation).includes(false)) {
      // TODO: api 연결
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <main className="flex flex-col justify-center items-center text-center w-96 mx-auto">
      <h2 className="text-2xl font-semibold mt-20">Sign up to your account</h2>
      <div className="flex flex-col justify-center items-center mt-10 w-full">
        <label className="block w-full text-start text-sm font-medium text-gray-600" htmlFor="email">
          이메일
        </label>
        <input
          type="email"
          className="w-full border-2 border-gray-300 mt-2 px-3 py-2 rounded-md text-sm outline-blue-700"
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={handleChangeInput}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-5 w-96">
        <label className="block w-full text-start text-sm text-sm font-medium text-gray-600" htmlFor="password">
          비밀번호
        </label>
        <input
          type="password"
          className="w-full border-2 border-gray-300 mt-2 px-3 py-2 rounded-md text-sm outline-blue-700"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChangeInput}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-5 w-96">
        <label className="block w-full text-start text-sm text-sm font-medium text-gray-600" htmlFor="Vpassword">
          비밀번호 확인
        </label>
        <input
          type="password"
          className="w-full border-2 border-gray-300 mt-2 px-3 py-2 rounded-md text-sm outline-blue-700"
          name="Vpassword"
          id="Vpassword"
          placeholder="Password"
          onChange={handleChangeInput}
        />
      </div>
      <button
        onClick={handleClickNext}
        className="w-full mt-5 bg-blue-700 px-3 py-2 text-white rounded-md font-medium text-sm"
      >
        다음
      </button>
      <div className="mt-3">
        Go back to&nbsp;
        <Link to="/login" className="text-sm text-blue-700 font-semibold">
          Login
        </Link>
      </div>
    </main>
  );
};

export default SignUp;