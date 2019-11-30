import { createSlice } from '@reduxjs/toolkit'

const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    schools: [
      {}
    ]
  },
  reducers: {
    loadShool(state, action) {
      state.schools = action.payload
    }
  }
})

export const {
  loadShool
} = schoolSlice.actions

export default schoolSlice.reducer