import React, { useState } from 'react';
import { connect } from 'react-redux'

function HighSchool1(props) {
  const { highSchool1, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>高中1</h5><span>High School 1</span>
      </div>
      <>
      {highSchool1.map((d, i) =>
        <div className="row" key={'highschool'+i}>
          <div className="input-field col s6" style={{maxWidth: '15rem'}}>
            <input value={d.year_of_entry || ''} onChange={e => /^\d{0,4}$/.test(e.target.value)? onUpdate({type: 'update', id: i, data: {year_of_entry: e.target.value}}) : {}} id={"year_of_entry"+i} type="text" />
            <label className={d.year_of_entry? 'active' : ''} htmlFor={"year_of_entry"+i}>入学年份 Year of entry</label>
          </div>
          <div className="input-field col s6" style={{maxWidth: '15rem'}}>
            <input value={d.year_of_leave || ''} onChange={e => /^\d{0,4}$/.test(e.target.value)? onUpdate({type: 'update', id: i, data: {year_of_leave: e.target.value}}) : {}} id={"year_of_leave"+i} type="text" />
            <label className={d.year_of_leave? 'active' : ''} htmlFor={"year_of_leave"+i}>毕业年份 Year of graduation</label>
          </div>
          <div className="input-field col s6" style={{maxWidth: '25rem'}}>
            <input value={d.school_name || ''} onChange={e => onUpdate({type: 'update', id: i, data: {school_name: e.target.value}})} id={"school_name"+i} type="text" />
            <label className={d.school_name? 'active' : ''} htmlFor={"school_name"+i}>毕业学校名称 School name</label>
          </div>
          {highSchool1.length > 1 &&
            <span class="btn-floating waves-effect waves-light" onClick={e => onUpdate({type: 'remove', id: i})}><i class="material-icons">-</i></span>
          }
        </div>
      )}
      <span class="btn-floating waves-effect waves-light" onClick={e => onUpdate({type: 'add'})}><i class="material-icons">+</i></span>
      </>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  highSchool1: state.profile.highSchool1
}), {})(HighSchool1)