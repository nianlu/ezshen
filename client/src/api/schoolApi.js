import Axios from "axios";

export const login = (email, password, callback, catchback) => 
  Axios.get('/schools')
    .then(response =>
      // console.log('login')
      callback(response)
    )
    .catch(error =>
      // console.log('login failed')
      catchback(error)
    )