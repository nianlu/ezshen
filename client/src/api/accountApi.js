import axios from "axios";

axios.defaults.baseURL = 'http://www.ezshen.com:3000'

export const login = (email, password, callback, catchback) => 
  axios.get('/authentication', {auth: {
      email: email,
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

// export const register = (email, password) => 
export const register = (email, password, callback, catchback) => 
  axios.post('/users', {
    email: email,
    password: password
  })
    .then(() =>
      console.log('register')
    )
    .catch(() =>
      console.log('register failed')
    )