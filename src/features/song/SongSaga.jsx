import React from "react";
import { takeEvery, call, put, all } from "redux-saga/effects";

// Private API_KEY should be stored in a .env file and accessed using the `process.env` object.
// Example: const BASE_URL = process.env.API_KEY;
// Do NOT hardcode or push your API key to the repository — it's not safe.

// I'm currently using a public API, and for testing purposes, I've pushed the API code directly to the repository.
const BASE_URL = "https://jsonplaceholder.typicode.com";

function* fetchSongs(action) {
  try {
    const page = action?.payload?.page || 1;
    const limit = action?.payload?.limit || 5;

    const photosRes = yield call(
      fetch,
      `${BASE_URL}/photos?_page=${page}&_limit=${limit}`
    );
    const photos = yield photosRes.json();

    const [albumsRes, usersRes] = yield all([
      call(fetch, `${BASE_URL}/albums`),
      call(fetch, `${BASE_URL}/users`),
    ]);

    const albums = yield albumsRes.json();
    const users = yield usersRes.json();

    const songs = photos.map((photo) => {
      const album = albums.find((a) => a.id === photo.albumId);
      const user = users.find((u) => u.id === album?.userId);
      return {
        id: photo.id,
        title: photo.title,
        album: album?.title || "Unknown Album",
        artist: user?.name || "Unknown Artist",
        year: 2000 + (photo.id % 20),
        thumbnail: photo.thumbnailUrl,
      };
    });

    yield put({
      type: "songs/readSongSuccess",
      payload: { songs, page, limit },
    });
  } catch (error) {
    yield put({ type: "songs/readSongFailure", payload: error.message });
  }
}

export function* addNewSong(action) {
  try {
    yield call(fetch, `${BASE_URL}/albums`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
  } catch (error) {
    yield put({ type: "songs/readSongFailure", payload: error.message });
    console.log(error.message);
  }
}
export function* removeSong(action) {
  try {
    yield call(fetch, `${BASE_URL}/photos/${action.payload}`, {
      method: "DELETE",
    });

    yield put({ type: "songs/deleteSongSuccess", payload: action.payload });
  } catch (error) {
    yield put({ type: "songs/readSongFailure", payload: error.message });
  }
}
export function* updateSongs(action) {
  try {
    yield call(fetch, `${BASE_URL}/${action.payload.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload.payload),
    });

    yield put({
      type: "songs/updateSongSuccess",
      payload: { id: action.payload.id, data: action.payload.payload },
    });
  } catch (error) {
    yield put({ type: "songs/updateSongFailure", payload: error.message });
  }
}
export function* watchSongs() {
  yield takeEvery("songs/readSong", fetchSongs);
  yield takeEvery("songs/createSong", addNewSong);
  yield takeEvery("songs/deleteSong", removeSong);
  yield takeEvery("songs/updateSong", updateSongs);
}
