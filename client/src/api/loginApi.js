import axios from "axios";

axios.defaults.baseURL = 'http://www.ezshen.com:3000'

export const loginApi = (username, password, callback, catchback) => 
  axios.get('/authentication', {auth: {
      username: username,
      password: password,
    }})
    .then(response =>
      // console.log('login')
      callback(response)
    )
    .catch(error =>
      // console.log('login failed')
      catchback(error)
    )

export const registerApi = (username, email, password) => 
  axios.post('/users', {
    username: username,
    email: email,
    password: password
  })
    .then(() =>
      console.log('register')
    )
    .catch(() =>
      console.log('register failed')
    )