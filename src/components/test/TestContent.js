import { Link } from 'react-router-dom';

const TestContent = () => {
  return (
    <main className="text-center pt-10">
      <h1 className="text-5xl font-bold">This is Test Page</h1>
      <Link to="/" className="block underline mt-5 text-blue-800">
        Back to Main Page
      </Link>
      <div className="h-[1000px]"></div>
    </main>
  );
};

export default TestContent;