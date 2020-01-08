import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/accountApi'

import jwtDecode from 'jwt-decode'

const token = sessionStorage.getItem('token')
const initial = {
  login: token && token.length > 0,
  username: token && jwtDecode(token).user,
}

const accountSlice = createSlice({
  name: 'account',
  initialState: initial,
  reducers: {
    loginStart(state, action) {
      console.log('accountreducer loginstart')
      state.login = null
    },
    loginSuccess(state, action) {
      state.login = true
    },
    loginFailure(state, action) {
      console.log('accountreducer loginfail', action.payload)
      state.login = false
    },
    logout(state, action) {
      sessionStorage.removeItem('token')
      state.login = false
    }
  }
})

export const {
  loginStart, loginSuccess, loginFailure, logout
} = accountSlice.actions

export default accountSlice.reducer

export const login = (email, password) => dispatch => {
  console.log('accountreducer login')
  dispatch(loginStart)
  api.login(
    email, 
    password, 
    data => {
      if (data && data.length > 0) {
        // localStorage.setItem('token', data)
        sessionStorage.setItem('token', data)
        // const user = jwtDecode(data).user
        const user = 'test'
        if (user && user.length > 0) {
          dispatch(loginSuccess({username: user}))
        } else {
          dispatch(loginFailure())
        }
        // dispatch(loginSuccess({username: 'testuser'}))
      } else {
        dispatch(loginFailure())
      }
    },
    error => dispatch(loginFailure(error.message))
  )
}

export const register = (email, password) => dispatch => {
  console.log('accountreducer register')
  dispatch(loginStart)
  api.register(
    email, 
    password, 
    response => dispatch(loginSuccess(response)),
    error => dispatch(loginFailure(error.message))
  )
}

export const forgot = (email) => dispatch => {
  console.log('accountreducer forgot')
  dispatch(loginStart)
  api.forgot(
    email, 
    response => dispatch(loginSuccess(response)),
    error => dispatch(loginFailure(error.message))
  )
}
