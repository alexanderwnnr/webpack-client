import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        status: 'idle', //idle, loading, succeeded, failed,
        error: null
    }
})

export default moviesSlice.reducer