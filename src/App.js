import React, { useState } from "react";
import Siswa from "./Component/Siswa/Siswa";
import Sekolah from "./Component/Sekolah/Sekolah";

function App() {
  const [jumlahMurid, setJumlahMurid] = useState(0);
  const dataJumlahMurid = (jumlahMurid) => {
    setJumlahMurid(jumlahMurid);
  };
  return (
    <div>
      <div>
        <Siswa dataJumlahMurid={dataJumlahMurid} />
        <Sekolah jumlahMurid={jumlahMurid} />
      </div>
    </div>
  );
}

export default App;
