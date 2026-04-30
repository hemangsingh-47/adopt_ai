import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthForm from '../components/AuthForm.jsx';
import { loginSchema } from '../utils/validation.js';
import useAuth from '../hooks/useAuth.js';
import SEO from '../components/SEO';

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated, isError, message, reset } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
      reset();
    }
  }, [isError, message, reset]);

  const handleSubmit = async (values, { setSubmitting }) => {
    const result = await login(values);
    if (result.meta?.requestStatus === 'fulfilled') {
      toast.success(`Welcome back, ${result.payload.name}!`);
    }
    setSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Login" 
        description="Log in to your AdOpt AI account to manage your marketing campaigns and access AI-driven insights."
        url="/login"
      />
      <AuthForm
      title="Welcome back"
      subtitle="Log in to your workspace to continue optimizing."
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
      isRegister={false}
    />
    </>
  );
};

export default Login;
