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
          <span className="text-lg font-semibold">Logo</span>
        </Link>
        <ul className="flex gap-5 flex-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">List</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-5">
          <li>Sign Up</li>
          <li>
            <Link to="/login" className="block bg-blue-700 text-white font-medium text-sm px-3 py-1.5 rounded-md">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
