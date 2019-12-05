import React, { useState } from 'react'
import { connect } from 'react-redux'

import Register from './Register'
import Login from './Login'

import { login, register } from './accountSlice'

const mapDispatch = { login, register }

function Account(props) {

  const { forNew, login, register, account } = props
  console.log(forNew)

  return (
    <div>
      {forNew?
        <Register onSubmit={register} />
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