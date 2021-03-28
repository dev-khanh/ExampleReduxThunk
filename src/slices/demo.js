import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getMenus } from 'api'

const initialState = { loading: false, arrayList: [], colorsGolbal: {} }

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await getMenus()
    return response
  },
)

const demo = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload
    },
    sendDataToArray(state, action) {
      state.arrayList = action.payload
    },
    setColor(state, action) {
      state.colorsGolbal = action.payload
    },
  },
  extraReducers: {
    [fetchUserById.fulfilled]: (state, action) => {
      state.arrayList = action.payload
    },
  },
})

export const { setLoading, setColor, sendDataToArray } = demo.actions

export default demo.reducer
