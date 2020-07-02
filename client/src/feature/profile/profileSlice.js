import { createSlice } from '@reduxjs/toolkit'
import * as api from 'api/profileApi'

const initial = {
  updating: false,
  personalInformation: {
    first_name: '',
    last_name: '',
    nick_name: '',
    other_name: '',
    sex: '',
    date_of_birth: ''
  },
  contactDetails: {},
  family: {}
}

const profileSlice = createSlice({
  name: 'profile',
  initialState: initial,
  reducers: {
    loadProfileStart(state, action) {
      console.log('profile loadprofilestart', action)
      state.updating = true
    },
    loadProfileSuccess(state, action) {
      console.log('profile loadprofilesuccess', action)
      if (action.payload.type === 'personalInformation')
        state.personalInformation = action.payload.data
      if (action.payload.type === 'contactDetails')
        state.contactDetails = action.payload.data
      if (action.payload.type === 'family')
        state.family = action.payload.data
      state.updating = false
    },
    loadProfileFailure(state, action) {
      console.log('profile loadprofilefailure', action)
      state.updating = false
    },
    saveProfileStart(state, action) {
      console.log('profile saveprofilestart', action)
      state.updating = true
    },
    saveProfileSuccess(state, action) {
      console.log('profile saveprofilesuccess', action)
      state.updating = false
    },
    saveProfileFailure(state, action) {
      console.log('profile saveprofilefailure', action)
      state.updating = false
    },
    updateProfile(state, action) {
      if (action.payload.type === 'personalInformation')
        state.personalInformation = {...state.personalInformation, ...action.payload.data}
      else if (action.payload.type === 'contactDetails')
        state.contactDetails = {...state.contactDetails, ...action.payload.data}
      else if (action.payload.type === 'family')
        state.family = {...state.family, ...action.payload.data}
      else if (action.payload.type === 'highSchool1')
        state.highSchool1 = {...state.highSchool1, ...action.payload.data}
      else if (action.payload.type === 'highSchool2')
        state.highSchool2 = {...state.highSchool2, ...action.payload.data}
      else if (action.payload.type === 'college')
        state.college = {...state.college, ...action.payload.data}
      else if (action.payload.type === 'futurePlans')
        state.futurePlans = {...state.futurePlans, ...action.payload.data}
      else if (action.payload.type === 'tests')
        state.tests = {...state.tests, ...action.payload.data}
      else if (action.payload.type === 'extracurricularActivities')
        state.extracurricularActivities = {...state.extracurricularActivities, ...action.payload.data}
      else if (action.payload.type === 'hobbies')
        state.hobbies = {...state.hobbies, ...action.payload.data}
      else if (action.payload.type === 'writing')
        state.writing = {...state.writing, ...action.payload.data}
    },
    setMessage(state, action) {
      console.log('profile setmsg', action.payload)
      state.message = action.payload
    }
  }
})

export const {
  loadProfileStart, loadProfileSuccess, loadProfileFailure,
  saveProfileStart, saveProfileSuccess, saveProfileFailure,
  updateProfile
} = profileSlice.actions

export default profileSlice.reducer

export const fetchProfile = s => dispatch => {
  console.log('profileslice fetchprofile', s)
  dispatch(loadProfileStart)
  if (s === 'personalInformation')
    api.getPersonalInformation(
      response => dispatch(loadProfileSuccess({data: response, type: 'personalInformation'})),
      error => dispatch(loadProfileFailure('fetch personalInformation failed'))
    )
  else if (s === 'contactDetails')
    api.getContactDetails(
      response => dispatch(loadProfileSuccess({data: response, type: 'contactDetails'})),
      error => dispatch(loadProfileFailure('fetch contactDetails failed'))
    )
  else if (s === 'family')
    api.getFamily(
      response => dispatch(loadProfileSuccess({data: response, type: 'family'})),
      error => dispatch(loadProfileFailure('fetch family failed'))
    )
  else if (s === 'highSchool1')
    api.getHighSchool1(
      response => dispatch(loadProfileSuccess({data: response, type: 'highSchool1'})),
      error => dispatch(loadProfileFailure('fetch highSchool1 failed'))
    )
  else if (s === 'highSchool2')
    api.getHighSchool2(
      response => dispatch(loadProfileSuccess({data: response, type: 'highSchool2'})),
      error => dispatch(loadProfileFailure('fetch highSchool2 failed'))
    )
  else if (s === 'college')
    api.getCollege(
      response => dispatch(loadProfileSuccess({data: response, type: 'college'})),
      error => dispatch(loadProfileFailure('fetch college failed'))
    )
  else if (s === 'futurePlans')
    api.getFuturePlans(
      response => dispatch(loadProfileSuccess({data: response, type: 'futurePlans'})),
      error => dispatch(loadProfileFailure('fetch futurePlans failed'))
    )
  else if (s === 'tests')
    api.getTests(
      response => dispatch(loadProfileSuccess({data: response, type: 'tests'})),
      error => dispatch(loadProfileFailure('fetch tests failed'))
    )
  else if (s === 'extracurricularActivities')
    api.getExtracurricularActivities(
      response => dispatch(loadProfileSuccess({data: response, type: 'extracurricularActivities'})),
      error => dispatch(loadProfileFailure('fetch extracurricularActivities failed'))
    )
  else if (s === 'hobbies')
    api.getHobbies(
      response => dispatch(loadProfileSuccess({data: response, type: 'hobbies'})),
      error => dispatch(loadProfileFailure('fetch hobbies failed'))
    )
  else if (s === 'writing')
    api.getWriting(
      response => dispatch(loadProfileSuccess({data: response, type: 'writing'})),
      error => dispatch(loadProfileFailure('fetch writing failed'))
    )
}

export const saveProfile = (s, d) => dispatch => {
  console.log('profileslice updatepersonalInfo')
  dispatch(saveProfileStart)
  if (s === 'personalInformation')
    api.putPersonalInformation(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save personalInformation failed'))
    )
  else if (s === 'contactDetails')
    api.putContactDetails(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save contactDetails failed'))
    )
  else if (s === 'family')
    api.putFamily(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save family failed'))
    )
  else if (s === 'highSchool1')
    api.putHighSchool1(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save highSchool1 failed'))
    )
  else if (s === 'highSchool2')
    api.putHighSchool2(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save highSchool2 failed'))
    )
  else if (s === 'college')
    api.putCollege(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save college failed'))
    )
  else if (s === 'futurePlans')
    api.putFuturePlans(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save futurePlans failed'))
    )
  else if (s === 'tests')
    api.putTests(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save tests failed'))
    )
  else if (s === 'extracurricularActivities')
    api.putExtracurricularActivities(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save extracurricularActivities failed'))
    )
  else if (s === 'hobbies')
    api.putHobbies(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save hobbies failed'))
    )
  else if (s === 'writing')
    api.putWriting(
      d,
      res => dispatch(saveProfileSuccess()),
      error => dispatch(saveProfileFailure('save writing failed'))
    )
}

export const fetchPersonalInformation = _ => dispatch => {
  console.log('profileslice loadpersonalInfo')
  dispatch(loadProfileStart)
  api.getPersonalInformation(
    response => dispatch(loadProfileSuccess({data: response, type: 'personalInformation'})),
    error => dispatch(loadProfileFailure('save failed'))
  )
}

export const savePersonalInformation = (data) => dispatch => {
  console.log('profileslice updatepersonalInfo')
  dispatch(saveProfileStart)
  api.putPersonalInformation(
    data, 
    response => dispatch(saveProfileSuccess()),
    error => dispatch(saveProfileFailure('save failed'))
  )
}
