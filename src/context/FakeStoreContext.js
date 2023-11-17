import React, { createContext, useState, useEffect } from 'react'; // Gerekli kütüphaneleri içe aktarıyoruz.

const FakeStoreContext = createContext(); // Context nesnesini oluşturuyoruz.

const FakeStoreProvider = ({ children }) => { // Veriyi sağlamak için bir bileşen oluşturuyoruz.
  const [categories, setCategories] = useState([]); // Kategorileri saklamak için state tanımlıyoruz.

  useEffect(() => { // Bileşen yüklendiğinde çalışacak işlevi tanımlıyoruz.
    fetch('https://fakestoreapi.com/products/categories') 
      .then(response => response.json())
      .then(veri => setCategories(veri));
  }, []);

  return (
    <FakeStoreContext.Provider value={{ categories }}> {/* Veriyi paylaşmak istediğimiz bileşenleri sarıyoruz */}
      {children} {/* İçine sarıldığı bileşenlere erişimi sağlamak için özelliği kullanıyoruz */}
    </FakeStoreContext.Provider>
  );
};

export { FakeStoreContext, FakeStoreProvider }; 
