import axios from "axios";

axios.defaults.baseURL = 'http://www.ezshen.com:3000'

axios.interceptors.request.use(
  config => {
    // console.log('axios')
    if (!config.headers.Authorization) {
      // const token = localStorage.getItem('token')
      const token = sessionStorage.getItem('token')
      // console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    // console.log('config', config.headers.Authorization)
    return config;
  },
  error => Promise.reject(error)
)

// export const login = (email, password, callback, catchback) => 
//   callback('eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidXNlciJ9.wIh6IORjUMCIeJAyXohVfpt4VqSlR1uyIrMGmaxR5u4')
  // (email && email === 'test@ezshen.com' && password && password === 'pw')?
  //   callback('eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidXNlciJ9.wIh6IORjUMCIeJAyXohVfpt4VqSlR1uyIrMGmaxR5u4')
  //   :
  //   catchback('failed login')


export const login = (email, password, callback, catchback) => 
// export const login_real = (email, password, callback, catchback) => 
  axios.get('/authentication', {auth: {
      username: email,
      password: password,
    }})
    .then(response => callback(response.data.token))
    .catch(error => catchback(error))

// export const register = (email, password) => 
export const register = (email, password, callback, catchback) => 
  axios.post('/users', {
    email: email,
    password: password
  })
  .then(response => callback(response))
  .catch(error => catchback(error))
  // .then(() => console.log('registered'))
  // .catch(error => console.log('register failed', error))

export const forgot = (email, callback, catchback) => 
  axios.put('/users/resetbyemail', {
    email: email,
  })
  .then(response => callback(response.data))
  .catch(error => catchback(error))

export const resetPassword = (email, password, newPassword, callback, catchback) => 
  axios.put('/users/resetbypassword', {
    email: email,
    password: password,
    newpassword: newPassword
  })
  .then(response => callback(response.data))
  .catch(error => catchback(error))