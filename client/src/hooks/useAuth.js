import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser, logout, reset } from '../features/auth/authSlice.js';

const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isLoading, isError, message } = useSelector((state) => state.auth);

  const login = (credentials) => dispatch(loginUser(credentials));
  const register = (userData) => dispatch(registerUser(userData));
  const logoutUser = () => dispatch(logout());
  const resetState = () => dispatch(reset());

  return {
    user,
    token,
    isLoading,
    isError,
    message,
    isAuthenticated: !!token,
    login,
    register,
    logout: logoutUser,
    reset: resetState,
  };
};

export default useAuth;
