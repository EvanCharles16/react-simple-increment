import React, { useEffect, useState } from "react";

export default (props) => {
  const { dataJumlahMurid } = props;
  const [jumlahMurid, setJumlahMurid] = useState(0);
  const [nilaiSiswa, setNilaiSiswa] = useState(90);

  const tambahSiswa = () => {
    setJumlahMurid(jumlahMurid + 1);
  };

  const dropOut = () => {
    setJumlahMurid(jumlahMurid - 1);
  };

  const tambahNilai = () => {
    setNilaiSiswa(nilaiSiswa + 1);
  };

  const kurangNilai = () => {
    setNilaiSiswa(nilaiSiswa - 1);
  };

  useEffect(
    function () {
      console.log("useEffect untuk jumlah murid yang berubah", jumlahMurid);
      dataJumlahMurid(jumlahMurid);
    },
    [jumlahMurid, dataJumlahMurid]
  );

  useEffect(
    function () {
      console.log("useEffect untuk nilai siswa yang berubah", nilaiSiswa);
    },
    [nilaiSiswa]
  );

  return (
    <div>
      <div>
        <button onClick={tambahSiswa}>Tambah</button>
        <button onClick={dropOut}>Drop Out</button>
      </div>
      <div>jumlah murid : {jumlahMurid}</div>
      <div>
        Nilai :<button onClick={tambahNilai}>Tambah</button>
        <button onClick={kurangNilai}>Kurang</button>
      </div>
      <div>
        <div>nilai siswa : {nilaiSiswa}</div>
      </div>
    </div>
  );
};
