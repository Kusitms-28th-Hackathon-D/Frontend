import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  useState(() => {
    const token = localStorage.getItem('accessToken');
    setAccessToken(token);
  }, [accessToken]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white duration-150 ${scrollPosition > 0 ? 'shadow-md' : 'shadow-none'}`}
    >
      <div className="flex justify-between items-center gap-10 max-w-5xl mx-auto px-5 lg:px-0 h-12">
        <Link to="/" className="me-7">
          <img src="/images/logo/logo.png" />
        </Link>
        <ul className="flex justify-end gap-10 flex-1 text-[#333333]">
          <li>
            <Link to="/mypage">커리어 명함</Link>
          </li>
          <li>
            <Link to="/">커리어 그룹</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-7">
          <li>
            {accessToken ? (
              <button
                className="block bg-[#55B68F] text-white font-medium text-sm px-5 py-1.5 rounded-full text-sm"
                onClick={() => {
                  localStorage.setItem('accessToken', '');
                  window.location.reload();
                }}
              >
                로그아웃
              </button>
            ) : (
              <Link
                to="/login"
                className="block bg-[#55B68F] text-white font-medium text-sm px-5 py-1.5 rounded-full text-sm"
              >
                로그인
              </Link>
            )}
          </li>
          <li>
            {!accessToken && (
              <Link to="/signup" className="text-[#55B68F] font-semibold">
                회원가입
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
