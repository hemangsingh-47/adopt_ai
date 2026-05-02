import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthForm from '../components/AuthForm.jsx';
import { registerSchema } from '../utils/validation.js';
import useAuth from '../hooks/useAuth.js';
import SEO from '../components/SEO';

const Register = () => {
  const navigate = useNavigate();
  const { register, isAuthenticated, isError, message, reset } = useAuth();

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
    const result = await register(values);
    if (result.meta?.requestStatus === 'fulfilled') {
      toast.success(`Account created! Welcome, ${result.payload.name}.`);
    }
    setSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Create Account" 
        description="Join AdOpt AI today and start optimizing your advertising campaigns with precision intelligence."
        url="/register"
      />
      <AuthForm
      title="Create an account"
      subtitle="Join AdOpt AI to start optimizing your campaigns."
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
      isRegister={true}
    />
    </>
  );
};

export default Register;
