const initialState = {
  jumlahSiswa: 1001,
  nilaiSiswa: 0,
};
const DROPOUT = "DROPOUT";
const KURANGNILAI = "KURANGNILAI";
const TAMBAHNILAI = "TAMBAHNILAI";
const TAMBAHSISWA = "TAMBAHSISWA";

export { DROPOUT, KURANGNILAI, TAMBAHNILAI, TAMBAHSISWA };

export default (state = initialState, action = {}) => {
  console.log("reducer");
  switch (action.type) {
    case TAMBAHSISWA:
      return Object.assign({}, state, { jumlahSiswa: state.jumlahSiswa + 1 });
    case DROPOUT:
      return Object.assign({}, state, { jumlahSiswa: state.jumlahSiswa - 1 });
    case KURANGNILAI:
      return Object.assign({}, state, { nilaiSiswa: state.nilaiSiswa - 1 });
    case TAMBAHNILAI:
      return Object.assign({}, state, { nilaiSiswa: state.nilaiSiswa + 1 });
    default:
      console.log("default");
      return state;
  }
};
