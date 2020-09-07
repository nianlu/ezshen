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
export const getHighSchool2 = (callback, catchback) => {}
export const getCollege = (callback, catchback) => {}
export const getFuturePlans = (callback, catchback) => {}
export const getTests = (callback, catchback) => {}
export const getExtracurricularActivities = (callback, catchback) => {}
export const getHobbies = (callback, catchback) => {}
export const getWriting = (callback, catchback) => {}

export const putPersonalInformation = (data, callback, catchback) =>
  axios.put('/personinfo', {
    ...data
  })
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putContactDetails = (data, callback, catchback) =>
  axios.put('/contactinfo', {
    ...data
  })
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putFamily = (data, callback, catchback) =>
  axios.put('/familyinfo', {
    ...data
  })
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putHighSchool1 = (data, callback, catchback) =>
  axios.put('/highschoolinfo', {
    ...data
  })
  .then(response => callback(response.data))
  .catch(error => catchback(error))
export const putHighSchool2 = (data, callback, catchback) => {}
export const putCollege = (data, callback, catchback) => {}
export const putFuturePlans = (data, callback, catchback) => {}
export const putTests = (data, callback, catchback) => {}
export const putExtracurricularActivities = (data, callback, catchback) => {}
export const putHobbies = (data, callback, catchback) => {}
export const putWriting = (data, callback, catchback) => {}