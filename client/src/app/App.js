import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import Home from '../feature/home/Home'
import Account from '../feature/account/Account'
import Schools from '../feature/schools/Schools'
import Profile from '../feature/profile/Profile';

function App() {

  // const [active, setActive] = useState('home')

  return (
    <Router>
      <nav className=" teal lighten-3">
        <div className="nav-wrapper container">
          <Link to="/">易申</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/schools">查询</Link></li>
            <li><Link to="/">计划</Link></li>
            <li><Link to="/">申请</Link></li>
            <li><Link to="/profile">个人信息</Link></li>
            <li><Link to="/login">登录</Link></li>
            <li><Link to="/register">注册</Link></li>
          </ul>
          {/* <a href="#" className="brand-logo" style={{paddingLeft: '1rem'}} onClick={() => props.onActive('home')}>易申</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className={props.active === 'schools' && 'active'}><a href="#" onClick={() => props.onActive('schools')}>查询</a></li>
            <li><a href="#">计划</a></li>
            <li><a href="#">申请</a></li>
            <li className={props.active === 'profile' && 'active'}><a href="#" onClick={() => props.onActive('profile')}>个人信息</a></li>
            <li className={props.active === 'login' && 'active'}><a onClick={() => props.onActive('login')}>登录</a></li>
            <li className={props.active === 'register' && 'active'}><a onClick={() => props.onActive('register')}>注册</a></li>
          </ul> */}
        </div>
      </nav>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/schools">
            <Schools />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Account />
          </Route>
          <Route path="/register">
            <Account forNew={true} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
