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
        {hobbies.map((d, i) =>
          <div className="row" key={'hobbies'+i}>
            <div className="input-field col s6" style={{maxWidth: '25rem'}}>
              <input value={d.hobby_name || ''} onChange={e => onUpdate({type: 'update', id: i, data: {hobby_name: e.target.value}})} id={"hobby_name"+i} type="text" />
              <label className={d.hobby_name? 'active' : ''} htmlFor={"hobby_name"+i}>名称 Name</label>
            </div>
            <div className="input-field col s6" style={{maxWidth: '25rem'}}>
              <input value={d.participation_grade || ''} onChange={e => onUpdate({type: 'update', id: i, data: {participation_grade: e.target.value}})} id={"participation_grade"+i} type="text" />
              <label className={d.participation_grade? 'active' : ''} htmlFor={"participation_grade"+i}>那个年级参加活动 Participation grade level</label>
            </div>
            {hobbies.length > 1 &&
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
  hobbies: state.profile.hobbies
}), {})(Hobbies)