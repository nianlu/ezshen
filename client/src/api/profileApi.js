import axios from "axios";

export const getPersonalInformation = (callback, catchback) =>
  axios.get('/personinfo')
  .then(response => callback(response.data))
  .catch(error => catchback(error))

// export const getPersonalInformation = (callback, catchback) => {}
export const getContactDetails = (callback, catchback) => {}
export const getFamily = (callback, catchback) => {}
export const getHighSchool1 = (callback, catchback) => {}
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

// export const putPersonalInformation = (data, callback, catchback) => {}
export const putContactDetails = (data, callback, catchback) => {}
export const putFamily = (data, callback, catchback) => {}
export const putHighSchool1 = (data, callback, catchback) => {}
export const putHighSchool2 = (data, callback, catchback) => {}
export const putCollege = (data, callback, catchback) => {}
export const putFuturePlans = (data, callback, catchback) => {}
export const putTests = (data, callback, catchback) => {}
export const putExtracurricularActivities = (data, callback, catchback) => {}
export const putHobbies = (data, callback, catchback) => {}
export const putWriting = (data, callback, catchback) => {}