import React, { useState } from 'react';
// import { register } from '../../api/accountApi'

function Info(props) {

  const { onSubmit, email, message } = props

  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  return (
    <div>
      <h3 className="font-weight-bold center-align" style={{margin: "4rem 0"}}>更改密码</h3>
      <div className="row">
        <div className="col s4 offset-s4">
          <div className="row">
            <div className="input-field" style={{margin: 0}}>
              <input id="oldPassword" type="password" className="validate" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
              <label for="oldPassword">当前密码</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field" style={{margin: 0}}>
              <input id="password" type="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label for="password">新密码</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field" style={{margin: 0}}>
              <input id="password2" type="password" className={password===password2? "validate" : "validate invalid"} onChange={(e) => setPassword2(e.target.value)} />
              <label for="password2">再次输入新密码</label>
            </div>
          </div>
          <div className="row center-align">
            <div style={{marginBottom: '1rem'}}>{message}</div>
            <button type="submit" className="btn waves-effect waves-light" onClick={() => password === password2? onSubmit(email, oldPassword, password) : {}}>
              提交
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Info;
