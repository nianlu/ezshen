import React, { useState } from 'react';
import { connect } from 'react-redux'

function Hobbies(props) {
  const { hobbies, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>兴趣爱好及特长</h5><span>Hobbies</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
{/* 兴趣爱好及特长	Name	名称 */}
          <input value={hobbies.name || ''} onChange={e => onUpdate({name: e.target.value})} id="name" type="text" />
          <label className={hobbies.name? 'active' : ''} htmlFor="name">名称 Name</label>
        </div>
        {/* <div className="input-field col s6">
          <input value={hobbies.duration || ''} onChange={e => onUpdate({duration: e.target.value})} id="duration" type="text" />
          <label className={hobbies.duration? 'active' : ''} htmlFor="duration">参与时长 Duration</label>
        </div> */}
        <div className="input-field col s6">
          <input value={hobbies.participation_grade_level || ''} onChange={e => onUpdate({participation_grade_level: e.target.value})} id="participation_grade_level" type="text" />
          <label className={hobbies.participation_grade_level? 'active' : ''} htmlFor="participation_grade_level">那个年级参加活动 Participation grade level</label>
        </div>
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  hobbies: state.profile.hobbies
}), {})(Hobbies)