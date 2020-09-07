import React from 'react';

function Home() {
  return (
    <div>
      
      <div className="divider"></div>
      <section>
      </section>
      <div className="divider"></div>
      <div className="row center-align">
        <div className="col s12" style={{paddingTop: '1rem'}}>
          <h5>探索所有的学校，获取所有的资源</h5>
          {/* <input placeholder="学校，城市 或 专业" style={{margin: '2rem 0', width: '40%'}}></input>
          <a className="waves-effect waves-light btn">搜索</a> */}
          <div className="row" style={{marginTop: '2rem'}}>
            <div className="col s1"></div>
            <div className="col s3" style={{backgroundColor: 'lightgreen', height: '5rem'}}>
              school 1
            </div>
            <div className="col s3" style={{backgroundColor: 'lightblue', height: '5rem'}}>
              school 2
            </div>
            <div className="col s3" style={{backgroundColor: 'lightblue', height: '5rem'}}>
              school 3
            </div>
            <div className="col s1"></div>
          </div>
        </div>
      </div>
      <div className="row" style={{paddingTop: '1rem', marginTop: '3rem', backgroundColor: 'lightblue'}}>
        <h5 style={{marginLeft: '1rem'}}>新闻 咨询</h5>
        <div className="col s4" style={{backgroundColor: 'lightgreen', height: '10rem'}}>
          news 1
        </div>
        <div className="col s4">
          news 2
        </div>
        <div className="col s4">
          news 3
        </div>
      </div>
    </div>
  );
}

export default Home;
