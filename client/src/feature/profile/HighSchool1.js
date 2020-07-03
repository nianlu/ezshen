import React, { useState } from 'react';
import { connect } from 'react-redux'

function HighSchool1(props) {
  const { highSchool1, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>高中1</h5><span>High School 1</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input value={highSchool1.date_of_birth || ''} onChange={e => onUpdate({date_of_birth: e.target.value})} id="date_of_birth" type="text" />
          <label className={highSchool1.date_of_birth? 'active' : ''} htmlFor="year_of_entry">入学年月 Year of entry</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool1.date_of_birth || ''} onChange={e => onUpdate({date_of_birth: e.target.value})} id="date_of_birth" type="text" />
          <label className={highSchool1.date_of_birth? 'active' : ''} htmlFor="year_of_graduation">毕业年月 Year of graduation</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool1.date_of_birth || ''} onChange={e => onUpdate({date_of_birth: e.target.value})} id="date_of_birth" type="text" />
          <label className={highSchool1.date_of_birth? 'active' : ''} htmlFor="school_name">毕业学校名称 School name</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool1.date_of_birth || ''} onChange={e => onUpdate({date_of_birth: e.target.value})} id="date_of_birth" type="text" />
          <label className={highSchool1.date_of_birth? 'active' : ''} htmlFor="year_of_entry">入学年月 Year of entry</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool1.date_of_birth || ''} onChange={e => onUpdate({date_of_birth: e.target.value})} id="date_of_birth" type="text" />
          <label className={highSchool1.date_of_birth? 'active' : ''} htmlFor="year_of_graduation">毕业年月 Year of graduation</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool1.date_of_birth || ''} onChange={e => onUpdate({date_of_birth: e.target.value})} id="date_of_birth" type="text" />
          <label className={highSchool1.date_of_birth? 'active' : ''} htmlFor="school_name">曾就读学校名称 School name</label>
        </div>
        {/* <div className="input-field col s6">
          <input value={highSchool1.date_of_birth || ''} onChange={e => onUpdate({date_of_birth: e.target.value})} id="date_of_birth" type="text" />
          <label className={highSchool1.date_of_birth? 'active' : ''} htmlFor="date_of_birth">生日 Date of birth</label>
        </div> */}
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  highSchool1: state.profile.highSchool1
}), {})(HighSchool1)