
import { useState } from 'react';
import useAuthModel from '../models/AuthMode';

const useAuthController = () => {
  const { formData, setFormData } = useAuthModel();
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Handle authentication success, e.g., setAuthToken(data.token);

      console.log('Login successful!');
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Login failed:', error.message);
    }
  };

  return {
    formData,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useAuthController;
