import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center w-96 mx-auto">
      <h2 className="text-2xl font-semibold mt-20">Sign in to your account</h2>
      <div className="flex flex-col justify-center items-center mt-10 w-full">
        <label className="block w-full text-start text-sm font-medium text-gray-600" for="email">
          Email Address
        </label>
        <input
          type="email"
          className="w-full border-2 border-gray-300 mt-2 px-3 py-2 rounded-md text-sm outline-blue-700"
          name="email"
          id="email"
          placeholder="Email Address"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-5 w-96">
        <label className="block w-full text-start text-sm text-sm font-medium text-gray-600" for="email">
          Password
        </label>
        <input
          type="password"
          className="w-full border-2 border-gray-300 mt-2 px-3 py-2 rounded-md text-sm outline-blue-700"
          name="email"
          id="email"
          placeholder="Password"
        />
      </div>
      <button className="w-full mt-5 bg-blue-700 px-3 py-2 text-white rounded-md font-medium text-sm">Login</button>
      <div className="mt-3">
        Go back to&nbsp;
        <Link to="/" className="text-sm text-blue-700 font-semibold">
          Home Page
        </Link>
      </div>
    </main>
  );
};

export default Login;
