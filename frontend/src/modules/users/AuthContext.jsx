import  { createContext, useState } from 'react';
import PropTypes from 'prop-types'; 
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === 'test@example.com' && password === 'password') {
      setUser({ email });
      navigate('/');
    } else {
      setAuthError('Invalid credentials. Please try again.');
    }
  };

  const register = (email, password) => {
    if (email && password) {
      setUser({ email });
      navigate('/');
    } else {
      setAuthError('Please fill in all the fields correctly.');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, authError, setAuthError }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
