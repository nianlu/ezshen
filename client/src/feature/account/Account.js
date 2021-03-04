import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import SideMenu from '../component/SideMenu'
import Info from './Info'

import { login, register, forgot, resetPassword } from './accountSlice'
import { fetchPersonalInformation } from '../profile/profileSlice';
const mapDispatch = { login, register, forgot, resetPassword, fetchPersonalInformation }

function Account(props) {

  const { resetPassword, account } = props

  return (
    <div className='columns'>
      <div className='column is-2' style={{margin: '0.75rem', minWidth: '14rem'}}>
        <SideMenu active='account'>
          <ul style={{margin: '0.5rem 0.75rem'}}>
            <li><a onClick={_ => {}}>更改密码</a></li>
            <li><a onClick={_ => {}}>绑定方式</a></li>
          </ul>
        </SideMenu>
      </div>
      <div className='column is-10'>
        <Info onSubmit={resetPassword} email={account.email} message={account.message} />
      </div>
    </div>
  )
}

export default connect(state => ({
  account: state.account
}), mapDispatch)(Account)