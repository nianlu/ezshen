import React, { useState } from 'react';
import { connect } from 'react-redux'

function HighSchool2(props) {
  const { highSchool2, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>高中2</h5><span>High School 2</span>
      </div>
      <div className="row">
        <div className="input-field col s12">
          {/* <input value={highSchool2.main_courses || ''} onChange={e => onUpdate({main_courses: e.target.value})} id="main_courses" type="text" /> */}
          <textarea className="materialize-textarea" value={highSchool2.main_courses || ''} onChange={e => onUpdate({main_courses: e.target.value})} id="main_courses" />
          <label className={highSchool2.main_courses? 'active' : ''} htmlFor="main_courses">所学重点课程 Main courses</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.gpa || ''} onChange={e => onUpdate({gpa: e.target.value})} id="gpa" type="text" />
          <label className={highSchool2.gpa? 'active' : ''} htmlFor="gpa">高中三年平均成绩 GPA</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input value={highSchool2.counselor_firstname || ''} onChange={e => onUpdate({counselor_firstname: e.target.value})} id="counselor_firstname" type="text" />
          <label className={highSchool2.counselor_firstname? 'active' : ''} htmlFor="counselor_firstname">指导老师名 Counselor's first name</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.counselor_lastname || ''} onChange={e => onUpdate({counselor_lastname: e.target.value})} id="counselor_lastname" type="text" />
          <label className={highSchool2.counselor_lastname? 'active' : ''} htmlFor="counselor_lastname">指导老师姓 Counselor's last name</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.counselor_title || ''} onChange={e => onUpdate({counselor_title: e.target.value})} id="counselor_title" type="text" />
          <label className={highSchool2.counselor_title? 'active' : ''} htmlFor="counselor_title">指导老师工作职务 Counselor's job title</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.counselor_email || ''} onChange={e => onUpdate({counselor_email: e.target.value})} id="counselor_email" type="text" />
          <label className={highSchool2.counselor_email? 'active' : ''} htmlFor="counselor_email">指导老师电子邮箱 Counselor's e-mail address</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.counselor_phone || ''} onChange={e => onUpdate({counselor_phone: e.target.value})} id="counselor_phone" type="text" />
          <label className={highSchool2.counselor_phone? 'active' : ''} htmlFor="counselor_phone">指导老师电话号码 Counselor's phone number</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.awards || ''} onChange={e => onUpdate({awards: e.target.value})} id="awards" type="text" />
          <label className={highSchool2.awards? 'active' : ''} htmlFor="awards">荣誉和奖励 Honors and rewards</label>
        </div>
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  highSchool2: state.profile.highSchool2
}), {})(HighSchool2)