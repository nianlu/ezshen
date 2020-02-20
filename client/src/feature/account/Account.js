import React, { useState } from 'react'
import { connect } from 'react-redux'

import Info from './Info'

import { login, register, forgot, resetPassword } from './accountSlice'
const mapDispatch = { login, register, forgot, resetPassword }

function Account(props) {

  const { resetPassword, account } = props

  return (
    <div>
      <Info onSubmit={resetPassword} email={account.email} message={account.message} />
    </div>
  )
}

export default connect(state => ({
  account: state.account
}), mapDispatch)(Account)