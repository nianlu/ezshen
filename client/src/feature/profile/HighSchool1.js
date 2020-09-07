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
          <input value={highSchool1.year_of_entry1 || ''} onChange={e => onUpdate({year_of_entry1: e.target.value})} id="year_of_entry1" type="text" />
          <label className={highSchool1.year_of_entry1? 'active' : ''} htmlFor="year_of_entry1">入学年月 Year of entry</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool1.year_of_graduation1 || ''} onChange={e => onUpdate({year_of_graduation1: e.target.value})} id="year_of_graduation1" type="text" />
          <label className={highSchool1.year_of_graduation1? 'active' : ''} htmlFor="year_of_graduation1">毕业年月 Year of graduation</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool1.school_name1 || ''} onChange={e => onUpdate({school_name1: e.target.value})} id="school_name1" type="text" />
          <label className={highSchool1.school_name1? 'active' : ''} htmlFor="school_name1">毕业学校名称 School name</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool1.year_of_entry2 || ''} onChange={e => onUpdate({year_of_entry2: e.target.value})} id="year_of_entry2" type="text" />
          <label className={highSchool1.year_of_entry2? 'active' : ''} htmlFor="year_of_entry2">入学年月 Year of entry</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool1.year_of_graduation2 || ''} onChange={e => onUpdate({year_of_graduation2: e.target.value})} id="year_of_graduation2" type="text" />
          <label className={highSchool1.year_of_graduation2? 'active' : ''} htmlFor="year_of_graduation2">毕业年月 Year of graduation</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool1.school_name2 || ''} onChange={e => onUpdate({school_name2: e.target.value})} id="school_name2" type="text" />
          <label className={highSchool1.school_name2? 'active' : ''} htmlFor="school_name2">曾就读学校名称 School name</label>
        </div>
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