import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import SongReducer from "../features/song/SongsSlice.jsx";
import rootSaga from "../store/rootSaga.jsx";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: { songs: SongReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare),
});
sagaMiddleWare.run(rootSaga);
export default store;
