import React, { useState } from 'react';
import { connect } from 'react-redux'

function Family(props) {
  const { family, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>家庭</h5><span>Family</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="First name" type="text" className="validate" />
          <label htmlFor="First name">名 First name</label>
        </div>
        <div className="input-field col s6">
          <input id="Last name" type="text" className="validate" />
          <label htmlFor="Last name">姓 Last name</label>
        </div>
        <div className="input-field col s6">
          <input id="Occupation" type="text" className="validate" />
          <label htmlFor="Occupation">工作职务 Occupation</label>
        </div>
        <div className="input-field col s6">
          <input id="Education level" type="text" className="validate" />
          <label htmlFor="Education level">教育程度 Education level</label>
        </div>
        <div className="input-field col s6">
          <input id="Is your father living" type="text" className="validate" />
          <label htmlFor="Is your father living">父亲是否健在 Is your father living</label>
        </div>

        <div className="input-field col s6">
          <input id="First name" type="text" className="validate" />
          <label htmlFor="First name">名 First name</label>
        </div>
        <div className="input-field col s6">
          <input id="Last name" type="text" className="validate" />
          <label htmlFor="Last name">姓 Last name</label>
        </div>
        <div className="input-field col s6">
          <input id="Occupation" type="text" className="validate" />
          <label htmlFor="Occupation">工作职务 Occupation</label>
        </div>
        <div className="input-field col s6">
          <input id="Education level" type="text" className="validate" />
          <label htmlFor="Education level">教育程度 Education level</label>
        </div>
        <div className="input-field col s6">
          <input id="Is your father living" type="text" className="validate" />
          <label htmlFor="Is your father living">父亲是否健在 Is your father living</label>
        </div>
        <div className="input-field col s6">
          <input value={family.date_of_birth || ''} onChange={e => onUpdate({date_of_birth: e.target.value})} id="date_of_birth" type="text" />
          <label className={family.date_of_birth? 'active' : ''} htmlFor="date_of_birth">生日 Date of birth</label>
        </div>
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  family: state.profile.family
}), {})(Family)