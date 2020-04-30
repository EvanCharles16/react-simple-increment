import React from "react";
import { connect } from "react-redux";

const Count = (props) => {
  const { jumlahSiswa } = props;
  return <span>total Jumlah {jumlahSiswa}</span>;
};

const mapStateToProps = (state) => {
  return {
    jumlahSiswa: state.jumlahSiswa,
  };
};

export default connect(mapStateToProps)(Count);
