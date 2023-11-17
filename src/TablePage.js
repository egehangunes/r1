import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TablePage.css'; // Stil dosyasını ekledik

const TablePage = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [fakeApiData, setFakeApiData] = useState([]);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    setFormDataList(storedFormData);

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setFakeApiData(response.data);
      })
      .catch(error => {
        console.error('Fake API verileri alınamadı:', error);
      });
  }, []);

  const handleDelete = (index) => {
    const updatedFormData = formDataList.filter((_, i) => i !== index);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    setFormDataList(updatedFormData);
  };

  return (
    <div className="table-page">
      <h2>Form Verileri Tablosu</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Ad</th>
            <th>E-posta</th>
            <th>Mesaj</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData, index) => (
            <tr key={index}>
              <td>{formData.name}</td>
              <td>{formData.email}</td>
              <td>{formData.message}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Sil</button>
                <Link to={`/edit/${index}`}>Düzenle</Link> {/* Yeni düzenleme bağlantısı */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/" className="new-form-link">Yeni Form Ekle</Link>

      <div>
        <h2>Fake API Verileri</h2>
        <table className="fake-api-table">
          <thead>
            <tr>
              <th>İsim</th>
              <th>Mail Adresi</th>
            </tr>
          </thead>
          <tbody>
            {fakeApiData.map((data, idx) => (
              <tr key={idx}>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePage;
