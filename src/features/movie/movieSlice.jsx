import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommends: null,
  newDisney: null,
  original: null,
  trending: null
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommends = action.payload.recommends
      state.newDisney = action.payload.newDisney
      state.original = action.payload.original
      state.trending = action.payload.trending
    }
  }
})

export const { setMovies } = movieSlice.actions

export const selectRecommends = state => state.movie.recommends
export const selectNewDisney = state => state.movie.newDisney
export const selectOriginal = state => state.movie.original
export const selectTrending = state => state.movie.trending

export default movieSlice.reducer