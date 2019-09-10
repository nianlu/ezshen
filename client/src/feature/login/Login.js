import React, { useState } from 'react';
import { login } from '../../api/login'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
            <div className="col offset-s5">
              <button type="submit" className="btn waves-effect waves-light" onClick={() => login(email, password)}>
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
