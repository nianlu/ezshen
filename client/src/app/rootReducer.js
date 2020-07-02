import { combineReducers } from '@reduxjs/toolkit'

import schoolReducer from "../feature/schools/schoolSlice"
import accountReducer from "../feature/account/accountSlice"
import profileReducer from "../feature/profile/profileSlice"

const rootReducer = combineReducers({
  school: schoolReducer,
  account: accountReducer,
  profile: profileReducer,
})

export default rootReducer
