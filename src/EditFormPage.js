import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditFormPage = () => {
  const { index } = useParams();
  const [formData, setFormData] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    if (index < storedFormData.length) {
      setFormData(storedFormData[index]);
      setName(storedFormData[index].name);
      setEmail(storedFormData[index].email);
      setMessage(storedFormData[index].message);
    }
  }, [index]);

  const handleEdit = () => {
    const updatedFormData = { name, email, message };
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    storedFormData[index] = updatedFormData;
    localStorage.setItem('formData', JSON.stringify(storedFormData));
    window.location.href = '/table'; // Sayfayı yeniden yükleme
  };

  return (
    <div>
      <h2>Düzenle</h2>
      <form>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="button" onClick={handleEdit}>Kaydet</button>
      </form>
    </div>
  );
};

export default EditFormPage;
