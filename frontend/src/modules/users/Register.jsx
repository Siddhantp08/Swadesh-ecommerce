import { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import boats from '../../assets/boats-7001054_1280.jpg';
import hawa_mahal from '../../assets/hawa-mahal-6156123_1280.jpg';
import india from '../../assets/india-4044210_1280.jpg';
import ladakh from '../../assets/ladakh-2818861_1280.jpg';
import taj from '../../assets/taj_mahal.jpg';
const Register = () => {
  const { register, authError, setAuthError } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [index, setIndex] = useState(0); 
  const navigate = useNavigate();

  
  const images = [
    boats,hawa_mahal,india,ladakh,taj
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

  const handleRegister = (e) => {
    e.preventDefault();
    setAuthError('');
    register(email, password);
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
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h2>

          {authError && <p className="text-red-600 mb-4 text-center">{authError}</p>}

          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input mb-4 w-full border-2 border-gray-300 p-3 rounded-md focus:border-green-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input mb-4 w-full border-2 border-gray-300 p-3 rounded-md focus:border-green-500 focus:outline-none"
            />

            <button
              className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700 transition-colors mb-6"
              type="submit"
            >
              Register
            </button>
          </form>

          <div className="text-center">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
