import React, { useState } from 'react';
import { connect } from 'react-redux'

function College(props) {
  const { college, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>大学</h5><span>College</span>
      </div>
      <div>
        {college.map((d, i) =>
          <div className="row" key={'college'+i}>
            <div className="input-field col s6">
              <input value={d.year_of_entry || ''} onChange={e => onUpdate({type: 'update', id: i, data: {year_of_entry: parseInt(e.target.value)}})} id={"year_of_entry"+i} type="text" />
              <label className={d.year_of_entry? 'active' : ''} htmlFor={"year_of_entry"+i}>入学年份 Year of entry</label>
            </div>
            <div className="input-field col s6">
              <input value={d.year_of_leave || ''} onChange={e => onUpdate({type: 'update', id: i, data: {year_of_leave: parseInt(e.target.value)}})} id={"year_of_leave"+i} type="text" />
              <label className={d.year_of_leave? 'active' : ''} htmlFor={"year_of_leave"+i}>毕业年份 Year of graduation</label>
            </div>
            <div className="input-field col s6">
              <input value={d.school_name || ''} onChange={e => onUpdate({type: 'update', id: i, data: {school_name: e.target.value}})} id={"school_name"+i} type="text" />
              <label className={d.school_name? 'active' : ''} htmlFor={"school_name"+i}>毕业学校名称 School name</label>
            </div>
            <div className="input-field col s6">
              <input value={d.major || ''} onChange={e => onUpdate({type: 'update', id: i, data: {major: e.target.value}})} id={"major"+i} type="text" />
              <label className={d.major? 'active' : ''} htmlFor={"major"+i}>专业 Major</label>
            </div>
            <div className="input-field col s12">
              <input value={d.main_courses || ''} onChange={e => onUpdate({type: 'update', id: i, data: {main_courses: e.target.value}})} id={"main_courses"+i} type="text" />
              <label className={d.main_courses? 'active' : ''} htmlFor={"main_courses"+i}>所学重点课程 Main courses</label>
            </div>
            <div className="input-field col s6">
              <input value={d.gpa || ''} onChange={e => onUpdate({type: 'update', id: i, data: {gpa: e.target.value}})} id={"gpa"+i} type="text" />
              <label className={d.gpa? 'active' : ''} htmlFor={"gpa"+i}>大学总平均成绩 GPA</label>
            </div>
            <div className="input-field col s6">
              <input value={d.honor_awards || ''} onChange={e => onUpdate({type: 'update', id: i, data: {honor_awards: e.target.value}})} id={"honor_awards"+i} type="text" />
              <label className={d.honor_awards? 'active' : ''} htmlFor={"honor_awards"+i}>荣誉和奖励 Honors and rewards</label>
            </div>
            {college.length > 1 &&
              <span class="btn-floating waves-effect waves-light" onClick={e => onUpdate({type: 'remove', id: i})}><i class="material-icons">-</i></span>
            }
          </div>
        )}
        <span class="btn-floating waves-effect waves-light" onClick={e => onUpdate({type: 'add'})}><i class="material-icons">+</i></span>
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