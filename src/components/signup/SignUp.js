import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { newUserState } from '../../states/signup';

const ValidationInitialState = {
  email: false,
  password: false,
  Vpassword: false,
};

const SignUp = () => {
  const [email, setEmail] = useState();
  const [passwd, setPasswd] = useState();
  const [validation, setValidation] = useState(ValidationInitialState);
  const [newUser, setNewUser] = useRecoilState(newUserState);
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
      console.log(newUser);
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
    if (Object.values(validation).includes(false)) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    setNewUser({
      email: email,
      password: passwd,
    });

    navigate('/signup/2');
  };

  // const handleJWTTest = () => {
  //   const jwtToken = localStorage.getItem('login');
  //   console.log('jwtToken', jwtToken);
  // };

  return (
    <main className="max-w-[40rem] mx-auto mb-20">
      <h2 className="text-3xl font-semibold mt-20 text-center text-[#55B68F] mb-5">
        <span className="block translate-x-2">회원가입</span>
      </h2>
      <div className="flex">
        <div className="w-96 flex flex-col items-center pt-6 me-16">
          <div className="w-full aspect-square bg-[#F2F2F2] rounded-[30px]">
            {/* <img src="https://api.multiavatar.com/hello.png" alt="avatar" /> */}
          </div>
          <button className="border-[1px] border-[#55B68F] mt-5 px-4 py-2 text-[#55B68F] font-medium rounded-full">
            사진 올리기
          </button>
        </div>
        <div className="flex flex-col justify-center items-center text-center w-full ">
          <div className="flex flex-col justify-center items-center w-full">
            <label className="block w-full text-start text-sm text-sm font-semibold text-gray-600" htmlFor="username">
              이름
            </label>
            <input
              type="text"
              className="w-full border-2 border-[#F2F2F2] mt-2 px-3 ps-6 py-3 rounded-md text-sm outline-blue-700"
              name="username"
              id="username"
              placeholder="이름을 작성해주세요."
              // onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full mt-5">
            <label className="block w-full text-start text-sm font-semibold text-gray-600" htmlFor="email">
              이메일
            </label>
            <input
              type="email"
              className="w-full border-2 border-[#F2F2F2] mt-2 px-3 ps-6 py-3 rounded-md text-sm outline-blue-700"
              name="email"
              id="email"
              placeholder="이메일을 입력해주세요."
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-5 w-full">
            <label className="block w-full text-start text-sm text-sm font-semibold text-gray-600" htmlFor="phone">
              휴대전화
            </label>
            <input
              type="text"
              className="w-full border-2 border-[#F2F2F2] mt-2 px-3 ps-6 py-3 rounded-md text-sm outline-blue-700"
              name="phone"
              id="phone"
              placeholder="전화번호를 입력해주세요."
              // onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-10 w-full">
            <label className="block w-full text-start text-sm text-sm font-semibold text-gray-600" htmlFor="password">
              비밀번호
            </label>
            <input
              type="password"
              className="w-full border-2 border-[#F2F2F2] mt-2 px-3 ps-6 py-3 rounded-md text-sm outline-blue-700"
              name="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-5 w-full">
            <label className="block w-full text-start text-sm text-sm font-semibold text-gray-600" htmlFor="Vpassword">
              비밀번호 확인
            </label>
            <input
              type="password"
              className="w-full border-2 border-[#F2F2F2] mt-2 px-3 ps-6 py-3 rounded-md text-sm outline-blue-700"
              name="Vpassword"
              id="Vpassword"
              placeholder="비밀번호를 확인해주세요."
              onChange={handleChangeInput}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleClickNext}
        className="w-full mt-12 bg-[#55B68F] px-3 py-3 text-white rounded-full font-medium text-sm"
      >
        다음
      </button>
    </main>
  );
};

export default SignUp;
