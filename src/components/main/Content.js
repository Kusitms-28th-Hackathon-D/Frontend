import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <main className="text-center pt-10">
      <h1 className="text-5xl font-bold">This is Main Page</h1>
      <Link to="/test" className="block underline mt-5 text-blue-800">
        Go to Test Page
      </Link>
    </main>
  );
};

export default Content;
