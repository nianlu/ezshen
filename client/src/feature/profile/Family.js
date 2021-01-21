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
        <div className="input-field col s6" style={{maxWidth: '10rem'}} >
          <input value={family.father_firstname} onChange={e => onUpdate({father_firstname: e.target.value})} id="First name" type="text" className="validate" />
          <label className={family.father_firstname? 'active' : ''} htmlFor="First name">名 First name</label>
        </div>
        <div className="input-field col s6" style={{maxWidth: '10rem'}} >
          <input value={family.father_lastname} onChange={e => onUpdate({father_lastname: e.target.value})} id="Last name" type="text" className="validate" />
          <label className={family.father_lastname? 'active' : ''} htmlFor="Last name">姓 Last name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6" style={{maxWidth: '25rem'}} >
          <input value={family.father_occupation} onChange={e => onUpdate({father_occupation: e.target.value})} id="Occupation" type="text" className="validate" />
          <label className={family.father_occupation? 'active' : ''} htmlFor="Occupation">工作职务 Occupation</label>
        </div>
        <div className="input-field col s6" style={{maxWidth: '25rem'}} >
          <input value={family.father_education} onChange={e => onUpdate({father_education: e.target.value})} id="Education level" type="text" className="validate" />
          <label className={family.father_education? 'active' : ''} htmlFor="Education level">教育程度 Education level</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6" style={{maxWidth: '20rem'}} >
          <input value={family.father_isalive} onChange={e => onUpdate({father_isalive: e.target.value})} id="Is your father living" type="text" className="validate" />
          <label className={family.father_isalive? 'active' : ''} htmlFor="Is your father living">父亲是否健在 Is your father living</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6" style={{maxWidth: '10rem'}} >
          <input value={family.mother_firstname} onChange={e => onUpdate({mother_firstname: e.target.value})} id="First name" type="text" className="validate" />
          <label className={family.mother_firstname? 'active' : ''} htmlFor="First name">名 First name</label>
        </div>
        <div className="input-field col s6" style={{maxWidth: '10rem'}} >
          <input value={family.mother_lastname} onChange={e => onUpdate({mother_lastname: e.target.value})} id="Last name" type="text" className="validate" />
          <label className={family.mother_lastname? 'active' : ''} htmlFor="Last name">姓 Last name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6" style={{maxWidth: '25rem'}} >
          <input value={family.mother_occupation} onChange={e => onUpdate({mother_occupation: e.target.value})} id="Occupation" type="text" className="validate" />
          <label className={family.mother_occupation? 'active' : ''} htmlFor="Occupation">工作职务 Occupation</label>
        </div>
        <div className="input-field col s6" style={{maxWidth: '25rem'}} >
          <input value={family.mother_education} onChange={e => onUpdate({mother_education: e.target.value})} id="Education level" type="text" className="validate" />
          <label className={family.mother_education? 'active' : ''} htmlFor="Education level">教育程度 Education level</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6" style={{maxWidth: '20rem'}} >
          <input value={family.mother_isalive} onChange={e => onUpdate({mother_isalive: e.target.value})} id="Is your father living" type="text" className="validate" />
          <label className={family.mother_isalive? 'active' : ''} htmlFor="Is your father living">母亲是否健在 Is your mother living</label>
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