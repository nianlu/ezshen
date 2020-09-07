import React, { useState } from 'react';
import { connect } from 'react-redux'

function College(props) {
  const { college, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>大学</h5><span>College</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input value={college.year_of_entry || ''} onChange={e => onUpdate({year_of_entry: e.target.value})} id="year_of_entry" type="text" />
          <label className={college.year_of_entry? 'active' : ''} htmlFor="year_of_entry">入学年份 Year of entry</label>
        </div>
        <div className="input-field col s6">
          <input value={college.year_of_graduation || ''} onChange={e => onUpdate({year_of_graduation: e.target.value})} id="year_of_graduation" type="text" />
          <label className={college.year_of_graduation? 'active' : ''} htmlFor="year_of_graduation">毕业年份 Year of graduation</label>
        </div>
        <div className="input-field col s6">
          <input value={college.school_name || ''} onChange={e => onUpdate({school_name: e.target.value})} id="school_name" type="text" />
          <label className={college.school_name? 'active' : ''} htmlFor="school_name">毕业学校名称 School name</label>
        </div>
        <div className="input-field col s6">
          <input value={college.major || ''} onChange={e => onUpdate({major: e.target.value})} id="major" type="text" />
          <label className={college.major? 'active' : ''} htmlFor="major">专业 Major</label>
        </div>
        <div className="input-field col s6">
          <input value={college.main_courses || ''} onChange={e => onUpdate({main_courses: e.target.value})} id="main_courses" type="text" />
          <label className={college.main_courses? 'active' : ''} htmlFor="main_courses">所学重点课程 Main courses</label>
        </div>
        <div className="input-field col s6">
          <input value={college.gpa || ''} onChange={e => onUpdate({gpa: e.target.value})} id="gpa" type="text" />
          <label className={college.gpa? 'active' : ''} htmlFor="gpa">大学总平均成绩 GPA</label>
        </div>
        <div className="input-field col s6">
          <input value={college.honors_and_rewards || ''} onChange={e => onUpdate({honors_and_rewards: e.target.value})} id="honors_and_rewards" type="text" />
          <label className={college.honors_and_rewards? 'active' : ''} htmlFor="honors_and_rewards">荣誉和奖励 Honors and rewards</label>
        </div>
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  college: state.profile.college
}), {})(College)