import React, { useState } from 'react';
import { connect } from 'react-redux'

function ExtracurricularActivities(props) {
  const { extracurricularActivities, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>课外活动</h5><span>Extracurricular Activities</span>
      </div>
      <div>
        {extracurricularActivities.map((d, i) =>
          <div className="row" key={'extracurricularActivities'+i}>
            <div className="input-field col s6" style={{maxWidth: '15rem'}}>
              <input value={d.activity_name || ''} onChange={e => onUpdate({type: 'update', id: i, data: {activity_name: e.target.value}})} id={"activity_name"+i} type="text" />
              <label className={d.activity_name? 'active' : ''} htmlFor={"activity_name"+i}>活动名称 Activity name</label>
            </div>
            <div className="input-field col s6" style={{maxWidth: '15rem'}}>
              <input value={d.position || ''} onChange={e => onUpdate({type: 'update', id: i, data: {position: e.target.value}})} id={"position"+i} type="text" />
              <label className={d.position? 'active' : ''} htmlFor={"position"+i}>担任职务 Position</label>
            </div>
            <div className="input-field col s6" style={{maxWidth: '25rem'}}>
              <input value={d.participation_grade_level || ''} onChange={e => onUpdate({type: 'update', id: i, data: {participation_grade_level: e.target.value}})} id={"participation_grade_level"+i} type="text" />
              <label className={d.participation_grade_level? 'active' : ''} htmlFor={"participation_grade_level"+i}>那个年级参加活动 Participation grade level</label>
            </div>
            {extracurricularActivities.length > 1 &&
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
  extracurricularActivities: state.profile.extracurricularActivities
}), {})(ExtracurricularActivities)