import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white duration-150 ${scrollPosition > 0 ? 'shadow-md' : 'shadow-none'}`}
    >
      <div className="flex justify-between items-center max-w-5xl mx-auto px-5 h-12">
        <Link to="/" className="me-7">
          <span className="text-lg font-semibold">로고</span>
        </Link>
        <ul className="flex gap-5 flex-1">
          <li>
            <Link to="/test">테스트</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-5">
          <li>
            <Link to="/login" className="block bg-blue-700 text-white font-medium text-sm px-3 py-1.5 rounded-md">
              로그인
            </Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
