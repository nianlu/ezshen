import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { forgot } from './accountSlice'
const mapDispatch = { forgot }

function Forgot(props) {

  const { forgot, message } = props

  const [email, setEmail] = useState('')

  return (
    <div>
      <h3 className="font-weight-bold center-align" style={{margin: "4rem 0 3rem 0"}}>找回密码</h3>
      <div className="row">
        <form className="col s4 offset-s4">
          <div className="row">
            <div className="input-field" style={{margin: 0}}>
              <input id="email" type="email" className="validate" onChange={(e) => setEmail(e.target.value)} />
              <label for="email">邮箱</label>
            </div>
          </div>
          <div className="row center-align">
            <div style={{marginBottom: '1rem'}}>{message}</div>
            <button type="submit" className="btn waves-effect waves-light" onClick={e => {e.preventDefault();forgot(email)}} style={{minWidth: '7rem'}}>
              发送临时密码
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default connect(state => ({
  message: state.account.message
}), mapDispatch)(Forgot)