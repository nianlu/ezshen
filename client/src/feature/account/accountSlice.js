import { createSlice } from '@reduxjs/toolkit'
import * as api from 'api/accountApi'

import jwtDecode from 'jwt-decode'

const token = sessionStorage.getItem('token')
const initial = {
  login: token && token.length > 0,
  email: token && jwtDecode(token).email,
  message: ''
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
      state.email = action.payload.email
      state.message = ''
    },
    loginFailure(state, action) {
      console.log('accountreducer loginfail', action.payload)
      state.login = false
    },
    logout(state, action) {
      sessionStorage.removeItem('token')
      state.login = false
    },
    setMessage(state, action) {
      console.log('accountreducer setmsg', action.payload)
      state.message = action.payload
    }
  }
})

export const {
  loginStart, loginSuccess, loginFailure, logout, setMessage
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
        const email = jwtDecode(data).email
        if (email && email.length > 0) {
          dispatch(loginSuccess({email: email}))
        } else {
          dispatch(setMessage('login failed'))
        }
      } else {
        dispatch(setMessage('login failed'))
      }
    },
    error => dispatch(setMessage(error.message))
  )
}

export const register = (email, password) => dispatch => {
  console.log('accountreducer register')
  dispatch(loginStart)
  api.register(
    email, 
    password, 
    // response => dispatch(loginSuccess(response)),
    response => dispatch(login(email, password)),
    error => dispatch(setMessage(error.message))
  )
}

export const forgot = (email) => dispatch => {
  console.log('accountreducer forgot')
  dispatch(loginStart)
  api.forgot(
    email, 
    response => dispatch(setMessage('email sent')),
    error => dispatch(setMessage('email sending failed'))
  )
}

export const resetPassword = (email, password, newPassword) => dispatch => {
  console.log('accountreducer resetPassword')
  dispatch(loginStart)
  api.resetPassword(
    email, 
    password,
    newPassword,
    response => dispatch(login(email, newPassword)),
    // error => console.log('reset password failed')
    error => dispatch(setMessage('reset password failed'))
  )
}
