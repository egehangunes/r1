import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FormPage.css'; // Stil dosyasını ekledik

const FormPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const formDataFromTable = location.state || {};

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: formDataFromTable.name || '',
      email: formDataFromTable.email || '',
      message: formDataFromTable.message || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Ad alanı zorunludur.'),
      email: Yup.string().email('Geçerli bir e-posta girin.').required('E-posta alanı zorunludur.'),
      message: Yup.string().required('Mesaj alanı zorunludur.'),
    }),
    onSubmit: (values) => {
      const newFormData = { ...values, id: Date.now() };
      const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
      storedFormData.push(newFormData);
      localStorage.setItem('formData', JSON.stringify(storedFormData));

      axios
        .post('https://jsonplaceholder.typicode.com/users', values)
        .then((response) => {
          console.log('Form verileri başarıyla gönderildi:', response.data);
          setIsFormSubmitted(true);
          navigate('/table');
        })
        .catch((error) => {
          console.error('Hata oluştu:', error);
        });
    },
  });

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Form</h2>
      <form className="form" onSubmit={formik.handleSubmit}>
        <input type="text" {...formik.getFieldProps('name')} placeholder="Ad" />
        {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}

        <input type="email" {...formik.getFieldProps('email')} placeholder="E-posta" />
        {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}

        <textarea {...formik.getFieldProps('message')} placeholder="Mesaj" />
        {formik.touched.message && formik.errors.message && <div className="error">{formik.errors.message}</div>}

        <button type="button" className="form-button" onClick={handleBack}>
          {isFormSubmitted ? 'Güncelle' : 'Geri Dön'}
        </button>
        <button type="submit" className="form-button">
          {isFormSubmitted ? 'Güncelle' : 'Gönder'}
        </button>
      </form>
    </div>
  );
};

export default FormPage;
