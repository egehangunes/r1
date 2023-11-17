import { createContext, useContext, useState } from 'react';

const SepetContext = createContext();

export function useSepet() {
  return useContext(SepetContext); // hook oluşturduk
}

export function SepetProvider({ children }) {
  const [sepetUrunleri, setSepetUrunleri] = useState([]); // sepetteki ürünleri alan bir state

  const sepeteEkle = (urun) => {
    setSepetUrunleri([...sepetUrunleri, urun]); // split operatörü ile dizi kopyalanıp yeni veri (ürün)
  };

  const urunSil = (urunId) => {
    const yeniSepet = [...sepetUrunleri]; // Kopya oluşturun
    const urunIndex = yeniSepet.findIndex((urun) => urun.id === urunId);

    if (urunIndex !== -1) {
      yeniSepet.splice(urunIndex, 1); // Belirtilen indexteki ürünü kaldırın
      setSepetUrunleri(yeniSepet); // Güncellenmiş sepeti ayarlayın
    }
  };

  const degerler = {
    sepetUrunleri,
    sepeteEkle,
    urunSil,
  };

  return (
    <SepetContext.Provider value={degerler}>
      {children}
    </SepetContext.Provider>
  );
}
