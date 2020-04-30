import React from "react";

export default (props) => {
  const { jumlahMurid } = props;
  return (
    <div>
      <h1>Jumlah anak sekolah disini adalah : {jumlahMurid} </h1>
    </div>
  );
};
