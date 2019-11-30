/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { tsPropertySignature } from '@babel/types';

function Nav(props) {
  return (
    <nav className=" teal lighten-3">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo" style={{paddingLeft: '1rem'}} onClick={() => props.onActive('home')}>易申</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className={props.active === 'schools' && 'active'}><a href="#" onClick={() => props.onActive('schools')}>查询</a></li>
          <li><a href="#">计划</a></li>
          <li><a href="#">申请</a></li>
          <li className={props.active === 'profile' && 'active'}><a href="#" onClick={() => props.onActive('profile')}>个人信息</a></li>
          <li className={props.active === 'login' && 'active'}><a onClick={() => props.onActive('login')}>登录</a></li>
          <li className={props.active === 'register' && 'active'}><a onClick={() => props.onActive('register')}>注册</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
