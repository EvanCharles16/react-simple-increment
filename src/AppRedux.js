import React from "react";
import { createStore } from "redux";

import { Provider } from "react-redux";
import { reducer } from "./reducer";

import Siswa from "./componentsRedux/Siswa";
import Sekolah from "./componentsRedux/Sekolah";

const store = createStore(reducer);

export default () => {
  return (
    <Provider store={store}>
      <Siswa />
      <Sekolah />
    </Provider>
  );
};
