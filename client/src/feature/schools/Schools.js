import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import SchoolEntry from './SchoolEntry';

function Schools() {
  return (
    <div>
      <Switch>
        <Route exact path="/schools">
          <div className="row" style={{marginTop: '1rem'}}>
            <div className="col s2">
            </div>
            <div className="col s10">
              <div className="row" style={{marginTop: '1rem'}}>
                <div className="col s1"></div>
                <div className="col s3" style={{backgroundColor: 'lightgreen', height: '5rem'}}>
                  <Link to='/schools/x'>
                    维拉诺瓦大学
                  </Link>
                </div>
                <div className="col s3" style={{backgroundColor: 'lightblue', height: '5rem'}}>
                  school 2
                </div>
                <div className="col s3" style={{backgroundColor: 'lightblue', height: '5rem'}}>
                  school 3
                </div>
                <div className="col s1"></div>
                {/* <Link className="col s4" to='/schools/x'>
                  维拉诺瓦大学
                </Link>
                <Link className="col s4" to='/schools/2'>
                  school 2
                </Link>
                <Link className="col s4" to='/schools/3'>
                  school 3
                </Link> */}
              </div>
            </div>
          </div>
        </Route>
        <Route path="/schools/x">
          <SchoolEntry />
        </Route>
      </Switch>
    </div>
  );
}

export default Schools;
