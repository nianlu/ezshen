import React, { useState } from 'react';
import { register } from '../../api/accountApi'

function Register() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h3 className="font-weight-bold center-align" style={{margin: "4rem 0"}}>用户注册</h3>
      <div className="row">
        <div className="col s4 offset-s4">
          <div className="row">
            <div className="input-field" style={{margin: 0}}>
              <input id="username" type="text" className="validate" onChange={(e) => setUsername(e.target.value)} />
              <label for="username">用户名</label>
            </div>
          </div>
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
            <div className="col offset-s5">
              <button type="submit" className="btn waves-effect waves-light" onClick={() => register(username, email, password)}>
                注册
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Register;
