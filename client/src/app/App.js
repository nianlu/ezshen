import React from 'react';
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
import M from 'materialize-css' //needed for animation
import 'materialize-css/dist/css/materialize.min.css'
// import './App.css'

import Home from '../feature/home/Home'
import Account from '../feature/account/Account'
import Schools from '../feature/schools/Schools'
import Profile from '../feature/profile/Profile';
import { logout } from '../feature/account/accountSlice';
import Login from 'feature/account/Login';
import Register from 'feature/account/Register';
import Forgot from 'feature/account/Forgot';

const mapDispatch = { logout }

function App(props) {
  const { login, logout } = props

  return (
    <Router>
      <nav className=" teal lighten-3">
        <div className="nav-wrapper container">
          <div className="brand-logo">
            <Link to="/">易申</Link>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/schools">查询</Link></li>
            <li><Link to="/">计划</Link></li>
            <li><Link to="/">申请</Link></li>
            {login?
              <>
              <li><Link to="/profile">个人资料</Link></li>
              <li><Link to="/account">账户</Link></li>
              <li><a onClick={_ => logout()}>登出</a></li>
              </>
              :
              <>
              <li><Link to="/login">登录</Link></li>
              <li><Link to="/register">注册</Link></li>
              </>
            }
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
          {login?
            <>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/login">
              <Redirect to='/' />
            </Route>
            <Route path="/register">
              <Redirect to='/' />
            </Route>
            </>
            :
            <>
            <Route path="/profile">
              <Redirect to='/' />
            </Route>
            <Route path="/account">
              <Redirect to='/' />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/forgot">
              <Forgot />
            </Route>
            </>
          }
        </Switch>
      </div>
    </Router>
  );
}

export default connect(state => ({
  login: state.account.login
}), mapDispatch)(App)