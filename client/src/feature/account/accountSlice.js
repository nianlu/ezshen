import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/accountApi'

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    login: false
  },
  reducers: {
    loginStart(state, action) {
      console.log('accountreducer loginstart')
      state.login = null
    },
    loginSuccess(state, action) {
      state.login = true
    },
    loginFail(state, action) {
      console.log('accountreducer loginfail', action.payload)
      state.login = false
    }
  }
})

export const {
  loginStart, loginSuccess, loginFail
} = accountSlice.actions

export default accountSlice.reducer

export const login = (email, password) => dispatch => {
  console.log('accountreducer login')
  dispatch(loginStart)
  api.login(
    email, 
    password, 
    response => dispatch(loginSuccess(response)),
    error => dispatch(loginFail(error.message))
  )
}

export const register = (email, password) => dispatch => {
  console.log('accountreducer register')
  dispatch(loginStart)
  api.register(
    email, 
    password, 
    response => dispatch(loginSuccess(response)),
    error => dispatch(loginFail(error.message))
  )
}
