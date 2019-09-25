import Axios from "axios";

export const loginApi = (email, password) => 
  Axios.get('/api/login', {auth: {
      username: email,
      password: password,
    }})
    .then(() =>
      console.log('login')
    )
    .catch(() =>
      console.log('login failed')
    )