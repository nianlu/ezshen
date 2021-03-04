import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SideMenu = props => {

  const { active } = props

  return (

    <aside className="menu">
      <ul className="menu-list">
        <li>
          <Link to='/profile' className={active === 'profile'? 'is-active' : ''}>我的信息</Link>
          {active === 'profile' && props.children}
        </li>
        <li><Link to='/admission' className={active === 'admission'? 'is-active' : ''}>我的申请</Link></li>
        <li><Link to='/profile' className={active === 'xx'? 'is-active' : ''}>我的收藏</Link></li>
        <li>
          <Link to='/account' className={active === 'account'? 'is-active' : ''}>账户管理</Link>
          {active === 'account' && props.children}
        </li>
      </ul>
    </aside>

  )
}

export default SideMenu