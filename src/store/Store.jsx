import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import SongReducer from "../features/song/SongsSlice";
import rootSaga from "../store/rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: { songs: SongReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare),
});
sagaMiddleWare.run(rootSaga);
export default store;
