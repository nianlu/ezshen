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
        <div className="input-field col s6">
          <input value={highSchool2.main_courses || ''} onChange={e => onUpdate({main_courses: e.target.value})} id="main_courses" type="text" />
          <label className={highSchool2.main_courses? 'active' : ''} htmlFor="main_courses">所学重点课程 Main courses</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.gpa || ''} onChange={e => onUpdate({gpa: e.target.value})} id="gpa" type="text" />
          <label className={highSchool2.gpa? 'active' : ''} htmlFor="gpa">高中三年平均成绩 GPA</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.counselor_first_name || ''} onChange={e => onUpdate({counselor_first_name: e.target.value})} id="counselor_first_name" type="text" />
          <label className={highSchool2.counselor_first_name? 'active' : ''} htmlFor="counselor_first_name">指导老师名 Counselor's first name</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.counselor_last_name || ''} onChange={e => onUpdate({counselor_last_name: e.target.value})} id="counselor_last_name" type="text" />
          <label className={highSchool2.counselor_last_name? 'active' : ''} htmlFor="counselor_last_name">指导老师姓 Counselor's last name</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.counselor_job_title || ''} onChange={e => onUpdate({counselor_job_title: e.target.value})} id="counselor_job_title" type="text" />
          <label className={highSchool2.counselor_job_title? 'active' : ''} htmlFor="counselor_job_title">指导老师工作职务 Counselor's job title</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.counselor_email_address || ''} onChange={e => onUpdate({counselor_email_address: e.target.value})} id="counselor_email_address" type="text" />
          <label className={highSchool2.counselor_email_address? 'active' : ''} htmlFor="counselor_email_address">指导老师电子邮箱 Counselor's e-mail address</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.counselor_phone_number || ''} onChange={e => onUpdate({counselor_phone_number: e.target.value})} id="counselor_phone_number" type="text" />
          <label className={highSchool2.counselor_phone_number? 'active' : ''} htmlFor="counselor_phone_number">指导老师电话号码 Counselor's phone number</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.honors_and_rewards || ''} onChange={e => onUpdate({honors_and_rewards: e.target.value})} id="honors_and_rewards" type="text" />
          <label className={highSchool2.honors_and_rewards? 'active' : ''} htmlFor="honors_and_rewards">荣誉和奖励 Honors and rewards</label>
        </div>
        <div className="input-field col s6">
          <input value={highSchool2.other_languages || ''} onChange={e => onUpdate({other_languages: e.target.value})} id="other_languages" type="text" />
          <label className={highSchool2.other_languages? 'active' : ''} htmlFor="other_languages">其他掌握语言 Other languages you are proficient in</label>
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