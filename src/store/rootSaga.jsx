import React from "react";
import { all } from "redux-saga/effects";
import { watchSongs } from "../features/song/SongSaga.jsx";
export default function* rootSaga() {
  yield all([watchSongs()]);
}
