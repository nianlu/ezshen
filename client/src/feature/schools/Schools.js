import React from 'react';

function Schools() {
  return (
    <div>
      <div className="row" style={{marginTop: '1rem'}}>
        <div className="col s2">
          <div className="chip">公立学校</div>
          <div className="chip">私立学校</div>
          <div className="chip">排名前100</div>
          <div className="chip">不需要GRE</div>
        </div>
        <div className="col s10">
          <div className="row">
            <input className="col s10" placeholder="学校，城市 或 专业"></input>
            <a className="waves-effect waves-light btn">搜索</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schools;
