
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 border-b-4 border-yellow-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 id="app-title" className="text-2xl md:text-3xl font-bold text-white">
              Generator Administrasi Guru &amp; Bank Soal Adaptif
            </h1>
            <p className="text-yellow-200 mt-1 text-sm md:text-base">
              Wujudkan Pembelajaran Inovatif dengan Perangkat Ajar Cerdas Berbasis AI
            </p>
          </div>
          <div className="text-left md:text-right">
            <p id="institution-name" className="text-white font-semibold text-sm md:text-base">
              YAYASAN PENDIDIKAN ISLAM PONDOK MODERN AL-GHOZALI
            </p>
            <p className="text-yellow-200 text-xs md:text-sm">Berbasis Deep Learning &amp; AI</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
