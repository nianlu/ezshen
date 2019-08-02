import React from 'react';

function Nav() {
  return (
    <nav className=" teal lighten-3">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo" style={{paddingLeft: '1rem'}}>ezshen</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">查询</a></li>
          <li><a href="#">计划</a></li>
          <li><a href="#">申请</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
