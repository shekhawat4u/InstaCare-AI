import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./content/userContext";
import { Helmet } from "react-helmet";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");

  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const changeInputHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/login`,
        userData
      );
      const user = response.data;
      setCurrentUser(user);
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setResetError("");
    setResetSuccess("");
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/forgot-password`,
        { email: resetEmail }
      );
      setResetSuccess(response.data.message);
    } catch (err) {
      setResetError(
        err.response?.data?.message ||
          "Failed to send reset email. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login text-white min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Login - Code Caffeine</title>
      </Helmet>
      <div className="container bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">
          Sign In to Code Caffeine
        </h2>
        <form className="form space-y-4" onSubmit={loginUser}>
          {error && <p className="text-red-400 mb-4">{error}</p>}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
          />
          {loading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          )}
        </form>
        <div className="flex flex-row justify-between">
          <div className="mt-4 text-gray-300">
            <small>
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-400 hover:underline">
                Sign up
              </Link>
            </small>
          </div>
          <div className="mt-4">
            <button
              onClick={() => setShowForgotPassword(true)}
              className="text-blue-400 hover:underline text-sm"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-sm w-full text-white">
            <h3 className="text-xl font-semibold mb-4">Reset Password</h3>
            {resetError && <p className="text-red-400 mb-4">{resetError}</p>}
            {resetSuccess && (
              <p className="text-green-400 mb-4">{resetSuccess}</p>
            )}
            <form onSubmit={handleForgotPassword}>
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none mb-4"
                required
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="bg-red-500 px-4 py-1.5 rounded-lg text-white font-semibold hover:bg-red-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 px-4 py-1.5 rounded-lg text-white font-semibold hover:bg-blue-600"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
