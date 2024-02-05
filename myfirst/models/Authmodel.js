
import { useState } from 'react';

const useAuthModel = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  return {
    formData,
    setFormData,
  };
};

export default useAuthModel;
