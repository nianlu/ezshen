import Axios from "axios";

export const login = (email, password) => 
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