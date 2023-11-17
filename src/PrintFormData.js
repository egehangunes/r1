import React, { useEffect, useState } from 'react';

const PrintFormData = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Local storage'dan form verilerini çek
    const formDataString = localStorage.getItem('formData');
    if (formDataString) {
      const parsedData = JSON.parse(formDataString);
      setFormData(parsedData);
    }
  }, []);

  return (
    <div>
      <h2>Local Storage'daki Form Verileri</h2>
      {formData ? (
        <div>
          <p>Ad: {formData.firstName}</p>
          <p>Soyad: {formData.lastName}</p>
          <p>E-posta: {formData.email}</p>
        </div>
      ) : (
        <p>Form verileri bulunamadı.</p>
      )}
    </div>
  );
};

export default PrintFormData;
