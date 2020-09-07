import React, { useState } from 'react';
import { connect } from 'react-redux'

function ExtracurricularActivities(props) {
  const { extracurricularActivities, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>课外活动</h5><span>Extracurricular Activities</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input value={extracurricularActivities.activity_name || ''} onChange={e => onUpdate({activity_name: e.target.value})} id="activity_name" type="text" />
          <label className={extracurricularActivities.activity_name? 'active' : ''} htmlFor="activity_name">活动名称 Activity name</label>
        </div>
        <div className="input-field col s6">
          <input value={extracurricularActivities.position || ''} onChange={e => onUpdate({position: e.target.value})} id="position" type="text" />
          <label className={extracurricularActivities.position? 'active' : ''} htmlFor="position">担任职务 Position</label>
        </div>
        <div className="input-field col s6">
          <input value={extracurricularActivities.participation_grade_level || ''} onChange={e => onUpdate({participation_grade_level: e.target.value})} id="participation_grade_level" type="text" />
          <label className={extracurricularActivities.participation_grade_level? 'active' : ''} htmlFor="participation_grade_level">那个年级参加活动 Participation grade level</label>
        </div>
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  extracurricularActivities: state.profile.extracurricularActivities
}), {})(ExtracurricularActivities)