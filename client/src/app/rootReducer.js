import { combineReducers } from '@reduxjs/toolkit'

import schoolReducer from "../feature/schools/schoolSlice"
import accountReducer from "../feature/account/accountSlice"

const rootReducer = combineReducers({
  school: schoolReducer,
  account: accountReducer,
})

export default rootReducer
