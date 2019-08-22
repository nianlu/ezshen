import React from 'react';
import { tsPropertySignature } from '@babel/types';

function Nav(props) {
  return (
    <nav className=" teal lighten-3">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo" style={{paddingLeft: '1rem'}} onClick={() => props.onActive('home')}>易申</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">查询</a></li>
          <li><a href="#">计划</a></li>
          <li><a href="#">申请</a></li>
          <li><a href="#" onClick={() => props.onActive('login')}>登录</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
