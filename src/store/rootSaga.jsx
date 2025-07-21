import { all } from "redux-saga/effects";
import { watchSongs } from "./saga";
export default function* rootSaga() {
  yield all([watchSongs()]);
}
