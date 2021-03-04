import React from 'react';
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
// import 'materialize-css/dist/css/materialize.min.css'
// import './App.css'

import Home from 'feature/home/Home'
import Account from 'feature/account/Account'
import Schools from 'feature/schools/Schools'
import Profile from 'feature/profile/Profile';
import Admission from 'feature/admission/Admission';
import { logout } from 'feature/account/accountSlice';
import Login from 'feature/account/Login';
import Register from 'feature/account/Register';
import Forgot from 'feature/account/Forgot';

const mapDispatch = { logout }

const App = props => {
  const { login, logout } = props

  return (

    <Router>

      <nav className="navbar is-tale" role="navigation" aria-label="main navigation" style={{backgroundColor: '#80cbc4'}}>
        <div className="navbar-brand">
          <Link to="/" className='navbar-item'>易申</Link>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/schools" className='navbar-item'>查找学校</Link>
            <Link to="/schools" className='navbar-item'>特色项目</Link>
            <Link to="/schools" className='navbar-item'>留学头条</Link>
            <Link to="/schools" className='navbar-item'>关于易申</Link>
            <Link to="/schools" className='navbar-item'>开始申请</Link>
          </div>
          <div className="navbar-end">
              {login?
                <>
                <Link className='navbar-item' to="/admission">我的申请</Link>
                <Link className='navbar-item' to="/account">账户管理</Link>
                <a className='navbar-item' onClick={_ => logout()}>登出</a>
                </>
                :
                <Link className='navbar-item' to="/login">登录/注册</Link>
              }
          </div>
        </div>
      </nav>

      {/* <div className="container"> */}
      <div>
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
            <Route path="/admission">
              <Admission />
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