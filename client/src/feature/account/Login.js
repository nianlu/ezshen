import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { loginApi } from '../../api/accountApi'
// import { login } from './accountSlice'

function Login(props) {

  const { onSubmit } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  return (
    <div>
      <h3 className="font-weight-bold center-align" style={{margin: "4rem 0 3rem 0"}}>用户登录</h3>
      <div className="row">
        <form className="col s4 offset-s4">
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
          <div className="row center-align">
            <span>{status}</span>
            <button type="submit" className="btn waves-effect waves-light" onClick={e => {e.preventDefault();onSubmit(email, password)}} style={{minWidth: '5rem'}}>
              登录
            </button>
          </div>
          <div className="row center-align">
            <Link to='/forgot'>
              <button type="submit" className="btn waves-effect waves-light" style={{minWidth: '5rem'}}>
                忘记密码
              </button>
            </Link>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default Login;
