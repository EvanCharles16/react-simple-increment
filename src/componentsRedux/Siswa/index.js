import React from "react";
import { connect } from "react-redux";
import {
  DROPOUT,
  KURANGNILAI,
  TAMBAHNILAI,
  TAMBAHSISWA,
} from "./../../reducer";

const Index = (props) => {
  const { jumlahSiswa, nilaiSiswa } = props;

  const tambahSiswa = () => {
    props.dispatch({ type: TAMBAHSISWA });
  };

  const dropOut = () => {
    props.dispatch({ type: DROPOUT });
  };

  const tambahNilai = () => {
    props.dispatch({ type: TAMBAHNILAI });
  };
  const kurangNilai = () => {
    props.dispatch({ type: KURANGNILAI });
  };

  return (
    <div>
      <div>
        <button onClick={tambahSiswa}>Tambah</button>
        <button onClick={dropOut}>Drop Out</button>
      </div>
      <div>jumlah murid : {jumlahSiswa}</div>
      <div>
        Nilai :<button onClick={tambahNilai}>Tambah</button>
        <button onClick={kurangNilai}>Kurang</button>
      </div>
      <div>Nilai siswa adalah {nilaiSiswa}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jumlahSiswa: state.jumlahSiswa,
    nilaiSiswa: state.nilaiSiswa,
  };
};
export default connect(mapStateToProps)(Index);
