import React, { useState } from 'react';
import { connect } from 'react-redux'

function Tests(props) {
  const { tests, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>标化考试</h5><span>Tests</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
{/* 标化考试	Choose the test you wish to report	选择考试类型(SAT, TOEFL, IELTS, GRE, GMAT) */}
          <input value={tests.test_name || ''} onChange={e => onUpdate({test_name: e.target.value})} id="test_name" type="text" />
          <label className={tests.test_name? 'active' : ''} htmlFor="test_name">选择考试类型 Choose the test you wish to report</label>
        </div>
        <div className="input-field col s6">
{/* 标化考试	Score	分数 */}
          <input value={tests.score || ''} onChange={e => onUpdate({score: e.target.value})} id="score" type="text" />
          <label className={tests.score? 'active' : ''} htmlFor="score">分数 Score</label>
        </div>
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  tests: state.profile.tests
}), {})(Tests)