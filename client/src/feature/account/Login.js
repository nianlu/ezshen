import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { loginApi } from '../../api/accountApi'
// import { login } from './accountSlice'

function Login(props) {

  const { onSubmit } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  return (
    <div>
      <h3 className="font-weight-bold center-align" style={{margin: "4rem 0"}}>用户登录</h3>
      <div className="row">
        <div className="col s4 offset-s4">
          <div className="row">
            <div className="input-field" style={{margin: 0}}>
              <input id="email" type="email" className="validate" onChange={(e) => setEmail(e.target.value)} />
              <label for="email">邮箱</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field" style={{margin: 0}}>
              <input id="password" type="password" className="validate" onChange={(e) => setPassword(e.target.value)} />
              <label for="password">密码</label>
            </div>
          </div>
          <div className="row">
            <span>{status}</span>
            <div className="col offset-s5">
              {/* <button type="submit" className="btn waves-effect waves-light" onClick={() => loginApi(email, password)}> */}
              <button type="submit" className="btn waves-effect waves-light" onClick={() => {console.log('logging in');onSubmit(email, password)}}>
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
