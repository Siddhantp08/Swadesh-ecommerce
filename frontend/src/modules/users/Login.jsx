import { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebook, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa'; // Icons
import { useNavigate } from 'react-router-dom';
import { useTransition, animated } from 'react-spring'; // For transitions

import road from '../../assets/india-road_side.jpg'
import taj_mahal from '../../assets/taj-mahal-5519945_1280.jpg'
import temple from '../../assets/temple.jpg'
import tiger from '../../assets/tiger-3198598_1280.jpg'
import holi from '../../assets/girl-7842780_1280.jpg'
const Login = () => {
  const { login, authError, setAuthError } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [index, setIndex] = useState(0); 
  const navigate = useNavigate();

  const images = [
    road,taj_mahal , temple, 
    tiger, holi
  ];

  
  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError('');
    login(email, password);
  };

  return (
    <div className="relative h-screen">
      
      {transitions((style, i) => (
        <animated.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ ...style, backgroundImage: `url(${images[i]})` }}
        />
      ))}

      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-lg max-w-lg w-full shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login to Swadesh</h2>

         
          {authError && <p className="text-red-600 mb-4 text-center">{authError}</p>}

         
          <form onSubmit={handleLogin}>
            <div className="relative mb-4">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 input mb-4 w-full border-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="relative mb-4">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 input mb-4 w-full border-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:outline-none"
              />
            </div>

            <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition-colors mb-6">
              Sign In
            </button>
          </form>

          
          <div className="text-center mb-4">or continue with</div>
          <div className="flex justify-between space-x-4 mb-6">
            <button
              onClick={() => console.log('Google Login')}
              className="flex items-center bg-red-500 text-white p-3 rounded-lg w-full justify-center hover:bg-red-600 transition-colors"
            >
              <FaGoogle className="mr-2" />
              Google
            </button>
            <button
              onClick={() => console.log('Facebook Login')}
              className="flex items-center bg-blue-600 text-white p-3 rounded-lg w-full justify-center hover:bg-blue-700 transition-colors"
            >
              <FaFacebook className="mr-2" />
              Facebook
            </button>
          </div>

          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => console.log('Phone Login')}
              className="flex items-center bg-green-500 text-white p-3 rounded-lg w-full justify-center hover:bg-green-600 transition-colors"
            >
              <FaPhone className="mr-2" />
              Phone Number
            </button>
          </div>

         
          <div className="text-center">
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/register')}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Register here
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
