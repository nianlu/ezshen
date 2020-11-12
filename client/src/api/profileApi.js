import axios from "axios";

export const getPersonalInformation = (callback, catchback) =>
  axios.get('/personinfo')
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const getContactDetails = (callback, catchback) =>
  axios.get('/contactinfo')
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const getFamily = (callback, catchback) =>
  axios.get('/familyinfo')
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const getHighSchool1 = (callback, catchback) =>
  axios.get('/highschoolinfo')
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const getHighSchool2 = (callback, catchback) =>
  axios.get('/highschoolinfo2')
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const getCollege = (callback, catchback) =>
  axios.get('/collegeinfo')
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const getFuturePlans = (callback, catchback) => {}
  // axios.get('/futurePlans')
  // .then(response => callback(response.data))
  // .catch(error => catchback(error))
export const getTests = (callback, catchback) =>
  axios.get('/testinfo')
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const getExtracurricularActivities = (callback, catchback) =>
  axios.get('/activities')
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const getHobbies = (callback, catchback) => {}
  // axios.get('/hobbies')
  // .then(response => callback(response.data))
  // .catch(error => catchback(error))
export const getWriting = (callback, catchback) => {}
  // axios.get('/writing')
  // .then(response => callback(response.data))
  // .catch(error => catchback(error))

export const putPersonalInformation = (data, callback, catchback) =>
  axios.put('/personinfo', data)
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putContactDetails = (data, callback, catchback) =>
  axios.put('/contactinfo', data)
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putFamily = (data, callback, catchback) =>
  axios.put('/familyinfo', data)
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putHighSchool1 = (data, callback, catchback) =>
  axios.put('/highschoolinfo', data)
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putHighSchool2 = (data, callback, catchback) =>
  axios.put('/highschoolinfo2', data)
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putCollege = (data, callback, catchback) =>
  axios.put('/collegeinfo', data)
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putFuturePlans = (data, callback, catchback) => {}
  // axios.put('/futurePlans', data)
  // .then(response => callback(response.data))
  // .catch(error => catchback(error))
export const putTests = (data, callback, catchback) =>
  axios.put('/testinfo', data)
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putExtracurricularActivities = (data, callback, catchback) =>
  axios.put('/activities', data)
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putHobbies = (data, callback, catchback) => {}
  // axios.put('/hobbies', data)
  // .then(response => callback(response.data))
  // .catch(error => catchback(error))
export const putWriting = (data, callback, catchback) => {}
  // axios.put('/writing', data)
  // .then(response => callback(response.data))
  // .catch(error => catchback(error))