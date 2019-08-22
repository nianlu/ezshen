import React from 'react';

function Login() {
  return (
    <div>

      <h3 className="font-weight-bold center-align" style={{margin: "4rem 0"}}>用户登录</h3>
      <div className="row">
        <div className="col s4 offset-s4">

          <div class="row">
            <div class="input-field" style={{margin: 0}}>
              <input id="email" type="email" class="validate" />
              <label for="email">邮箱</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field" style={{margin: 0}}>
              <input id="password" type="password" class="validate" />
              <label for="password">密码</label>
            </div>
          </div>
          <div class="row">
            <div className="col offset-s5">
              <button type="submit" className="btn waves-effect waves-light">
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
