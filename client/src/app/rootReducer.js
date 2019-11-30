import { combineReducers } from '@reduxjs/toolkit'

import schoolReducer from "../feature/schools/schoolSlice";

const rootReducer = combineReducers({
  schoolReducer: schoolReducer,
})

export default rootReducer
