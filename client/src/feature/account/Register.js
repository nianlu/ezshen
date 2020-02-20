import React, { useState } from 'react';
import { connect } from 'react-redux'

import { register } from './accountSlice'
const mapDispatch = { register }

function Register(props) {

  const { register, account } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  return (
    <div>
      <h3 className="font-weight-bold center-align" style={{margin: "4rem 0"}}>用户注册</h3>
      <div className="row">
        <div className="col s4 offset-s4">
          <div className="row">
            <div className="input-field" style={{margin: 0}}>
              <input id="email" type="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label for="email">邮箱</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field" style={{margin: 0}}>
              <input id="password" type="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label for="password">密码</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field" style={{margin: 0}}>
              <input id="password2" type="password" className={password===password2? "validate" : "validate invalid"} onChange={(e) => setPassword2(e.target.value)} />
              <label for="password2">{password === password2? '再次输入密码' : '密码输入不一致'}</label>
            </div>
          </div>
          <div className="row">
            <div className="col offset-s5">
              <button type="submit" className="btn waves-effect waves-light" onClick={() => password === password2? register(email, password) : {}}>
                注册
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({
  account: state.account
}), mapDispatch)(Register)