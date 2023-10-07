import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <main className="text-center pt-10">
      <h1 className="text-5xl font-bold">This is Main Page</h1>
      <Link to="/test" className="block underline mt-5 text-blue-800">
        Go to Test Page
      </Link>
      <Link to="/login" className="block underline mt-3 text-blue-800">
        Go to Login Page
      </Link>
      <Link to="/signup" className="block underline mt-3 text-blue-800">
        Go to SignUp Page
      </Link>
    </main>
  );
};

export default MainContent;
