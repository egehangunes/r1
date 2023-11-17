import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate kancası içe aktarılır
import { FakeStoreContext } from '../context/FakeStoreContext';
import ProductsByCategory from './ProductsByCategory';

const Categories = () => {
  const { categories } = useContext(FakeStoreContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate(); // navigate nesnesi oluşturulur

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSepet = () => {
    // Sepet sayfasına yönlendirme işlemi
    navigate('/sepet');
  };

  return (
    <div>
      <h2>Kategoriler</h2>
      <div style={{ display: 'flex' }}>
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className='category'
          >
            {category}
          </div>
        ))}
        <button id="buton" type="button" onClick={handleSepet}>
          Sepet
        </button>
      </div>
      {selectedCategory && (
        <ProductsByCategory selectedCategory={selectedCategory} />
      )}
    </div>
  );
};

export default Categories;
