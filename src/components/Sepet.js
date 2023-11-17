import React from 'react';
import { useSepet } from '../context/SepetContext';
import { useNavigate } from 'react-router-dom';

const Sepet = () => {
  const navigate = useNavigate();
  const { sepetUrunleri,  urunSil } = useSepet();

  const hesaplaToplam = () => {
    let toplam = 0;
    for (const urun of sepetUrunleri) {
      toplam += urun.price;
    }
    return Number(toplam);
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleSil = (urunId) => {
    urunSil(urunId);
  };

  return (
    <div className="sepet-container">
      <h2>Sepet</h2>
      <button type='button' id='butonsepet' onClick={handleBack}>Mağaza</button>
      <div className="sepet-listesi1">
        {sepetUrunleri.length === 0 ? (
          <p className="bos-sepet">Sepetiniz boş.</p>
        ) : (
          <ul>
            {sepetUrunleri.map((urun) => (
              <li key={urun.id} className='urun'>
                <img src={urun.image} alt={urun.title} />
                <div className="urun-detay">
                  <p className="urun-baslik">{urun.title}</p>
                  <p className="urun-fiyat">${urun.price}</p>
                </div>
                
                <button type='button' onClick={() => handleSil(urun.id)}>Kaldır</button>
              </li>
            ))}
          </ul>
        )}
        {sepetUrunleri.length > 0 && (
          <p className="toplam-fiyat">Toplam fiyat: ${hesaplaToplam()}</p>
        )}
      </div>
    </div>
  );
};

export default Sepet;
