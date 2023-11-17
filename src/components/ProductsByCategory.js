import React, { useState, useEffect } from 'react';
import { useSepet } from '../context/SepetContext';
import '../App.css';

const ProductsByCategory = ({ selectedCategory }) => {
  const { sepeteEkle } = useSepet();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [selectedCategory]);

  return (
    <div>
      <h2>Products in {selectedCategory}</h2>
      <div className="sepet-listesi">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>Fiyat: ${product.price}</p>
            <button type="button" onClick={() => sepeteEkle(product)}>
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
