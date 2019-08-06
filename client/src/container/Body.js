import React from 'react';

function Body() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s4">
          <h2>你的未来从这里开始</h2>
        </div>
        <div className="col s12">
          <p>无论你是不是第一次申请，我们都会帮助你作出最好的选择！</p>
          <a className="waves-effect waves-light btn">现在申请</a>
        </div>
      </div>
          <img className="responsive-img" src="./college.jpg"></img>
      <div className="divider"></div>
      <div className="row">
        <div className="col">
          <h4>探索所有的学习，获取所有的资源</h4>
          <input placeholder="学校，城市 或 专业"></input>
          <p>添加标签: 
          <div className="chip">公立学校<i className="close material-icons">x</i></div>
          <div className="chip">私立学校<i className="close material-icons">x</i></div>
          <div className="chip">排名前100<i className="close material-icons">x</i></div>
          <div className="chip">不需要GRE<i className="close material-icons">x</i></div>
          </p>
          <a className="waves-effect waves-light btn">搜索</a>
          <span> </span>
          <a>查看所有</a>
        </div>
      </div>
    </div>
  );
}

export default Body;
