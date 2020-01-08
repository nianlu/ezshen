import React, { useState } from 'react'
import { connect } from 'react-redux'

import Register from './Register'
import Login from './Login'
import Forgot from './Forgot'

import { login, register, forgot } from './accountSlice'

const mapDispatch = { login, register, forgot }

function Account(props) {

  const { forNew, forLost, login, register, forgot, account } = props
  console.log(forNew)

  return (
    <div>
      {forNew?
        <Register onSubmit={register} />
        : forLost?
        <Forgot onSubmit={forgot} />
        :
        <Login onSubmit={login} />
      }
      {/* <button onClick={_ => login('us','pd')}>aaa</button>
      <button onClick={_ => console.log(account)}>bbb</button> */}
    </div>
  );
}

export default connect(state => ({
  account: state.account
}), mapDispatch)(Account)