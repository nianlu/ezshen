import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Info from './Info'

import { login, register, forgot, resetPassword } from './accountSlice'
import { fetchPersonalInformation } from '../profile/profileSlice';
const mapDispatch = { login, register, forgot, resetPassword, fetchPersonalInformation }

function Account(props) {

  const { resetPassword, account } = props

  return (
    <div>
    <div>
      {/* <div className="row" style={{marginTop: '1rem', backgroundColor: '#555555'}}> */}
      <div className="row">
        <div className='col s3'>
          <div className='collection' style={{cursor: 'pointer'}}>
            <Link to='/profile' onClick={_ => fetchPersonalInformation()}>
              <a className='collection-item' onClick={_ => {}}>个人信息</a>
            </Link>
            <Link to='/admission'>
              <a className='collection-item' onClick={_ => {}}>我的申请</a>
            </Link>
            <Link to='/account'>
              <a className='collection-item' onClick={_ => {}}>我的收藏</a>
            </Link>
            <Link to='/account'>
              <a className='collection-item' onClick={_ => {}}>账户管理</a>
            </Link>
            <a className='collection-item' onClick={_ => {}} style={{marginLeft: 50}}>更改密码</a>
            <a className='collection-item' onClick={_ => {}} style={{marginLeft: 50}}>绑定方式</a>
          </div>
        </div>
        <div className='col s9' style={{padding: '1rem'}}>
          <Info onSubmit={resetPassword} email={account.email} message={account.message} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default connect(state => ({
  account: state.account
}), mapDispatch)(Account)