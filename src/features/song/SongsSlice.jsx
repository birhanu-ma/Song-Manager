import { createSlice } from "@reduxjs/toolkit";
const SongSlice = createSlice({
  name: "songs",
  initialState: {
    list: [],
    isLoading: false,
    error: null,
    added: false,
    page: 1,
    limit: 6,
  },
  reducers: {
    createSong: (state, action) => {
      state.isLoading = false;
      state.list.push(action.payload);
      state.added = true;
    },
    readSong: {
      reducer: (state) => {
        state.isLoading = true;
      },
      prepare: (payload) => ({ payload }),
    },

    readSongSuccess: (state, action) => {
      state.list = action.payload.songs;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.isLoading = false;
    },
    readSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateSong: (state) => {
      state.isLoading = true;
    },
    updateSongSuccess: (state, action) => {
      state.isLoading = false;
      const index = state.list.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload.data };
      }
    },
    updateSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteSong: (state) => {
      state.isLoading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.isLoading = false;
      state.list = state.list.filter((song) => song.id !== action.payload);
    },
    inverseAdded: (state) => {
      state.added = !state.added;
    },
    pageUp: (state) => {
      state.page += 1;
    },

    pageDown: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
  },
});

export const {
  createSong,
  readSong,
  updateSong,
  deleteSong,
  error,
  deleteSongSuccess,
  inverseAdded,
  pageUp,
  pageDown,
} = SongSlice.actions;

export default SongSlice.reducer;
