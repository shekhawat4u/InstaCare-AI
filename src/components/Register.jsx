import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [otp, setOtp] = useState(''); // For OTP input
  const [token, setToken] = useState(null); // To store JWT token for OTP verification
  const [step, setStep] = useState(1); // 1 for registration, 2 for OTP verification
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const changeOtpHandler = (e) => {
    setOtp(e.target.value);
  };

  // Step 1: Send OTP to email
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/register/send-otp`,
        userData
      );
      setToken(response.data.token); // Store token for OTP verification
      setStep(2); // Proceed to OTP verification step
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP and complete registration
  const verifyOtpHandler = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/register/verify-otp`,
        { token, otpInput: otp }
      );
      navigate('/login'); // Redirect to login after successful registration
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register text-white min-h-screen flex items-center justify-center">
       <Helmet>
      <title>Register - Code Caffeine</title>
    </Helmet>
      <div className="container bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">
          {step === 1 ? 'Sign Up to Code Caffeine' : 'Verify OTP'}
        </h2>
        {step === 1 ? (
          <form className="form space-y-4" onSubmit={sendOtpHandler}>
            {error && <p className="text-red-400 mb-4">{error}</p>}
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={userData.name}
              onChange={changeInputHandler}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
              autoFocus
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={changeInputHandler}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={changeInputHandler}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={loading}
            >
              {loading ? 'Sending OTP...' : 'Register'}
            </button>
          </form>
        ) : (
          <form className="form space-y-4" onSubmit={verifyOtpHandler}>
            {error && <p className="text-red-400 mb-4">{error}</p>}
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={changeOtpHandler}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={loading}
            >
              {loading ? 'Verifying OTP...' : 'Verify OTP'}
            </button>
          </form>
        )}
        <small className="block mt-4 text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
