import React, { useState } from 'react';
import { connect } from 'react-redux'

function Tests(props) {
  const { tests, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>标化考试</h5><span>Tests</span>
      </div>
      <div>
        {tests.map((d, i) =>
          <div className="row" key={'tests'+i}>
            <div className="input-field col s6">
              {/* 标化考试	Choose the test you wish to report	选择考试类型(SAT, TOEFL, IELTS, GRE, GMAT) */}
              <input value={d.test_name || ''} onChange={e => onUpdate({type: 'update', id: i, data: {test_name: e.target.value}})} id={"test_name"+i} type="text" />
              <label className={d.test_name? 'active' : ''} htmlFor={"test_name"+i}>选择考试类型 Choose the test you wish to report</label>
            </div>
            <div className="input-field col s6">
              {/* 标化考试	Score	分数 */}
              <input value={d.score || ''} onChange={e => onUpdate({type: 'update', id: i, data: {score: e.target.value}})} id={"score"+i} type="text" />
              <label className={d.score? 'active' : ''} htmlFor={"score"+i}>分数 Score</label>
            </div>
            <div className="input-field col s6">
              <input value={d.test_date || ''} onChange={e => onUpdate({type: 'update', id: i, data: {test_date: e.target.value}})} id={"test_date"+i} type="text" />
              <label className={d.test_date? 'active' : ''} htmlFor={"test_date"+i}>考试时间 Test date</label>
            </div>
            <div className="input-field col s6">
              <input value={d.next_test_date || ''} onChange={e => onUpdate({type: 'update', id: i, data: {next_test_date: e.target.value}})} id={"next_test_date"+i} type="text" />
              <label className={d.next_test_date? 'active' : ''} htmlFor={"next_test_date"+i}>计划下次考试时间 Planned test date</label>
            </div>
          </div>
        )}
        <span class="btn-floating waves-effect waves-light" onClick={e => onUpdate({type: 'remove'})}><i class="material-icons">-</i></span>
        <span class="btn-floating waves-effect waves-light" onClick={e => onUpdate({type: 'add'})}><i class="material-icons">+</i></span>
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