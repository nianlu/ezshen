import React from 'react';
import { connect } from 'react-redux'

function PersonalInformation(props) {

  const { personalInformation, onUpdate, onSave } = props
  // console.log('pi', personalInformation)

  return (
    <div className='col s12'>
      <div className="row">
        <h5>个人信息</h5><span>Personal Information</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input value={personalInformation.first_name || ''} onChange={e => onUpdate({first_name: e.target.value})} id="first_name" type="text" className="validate" />
          <label className={personalInformation.first_name? 'active' : ''} htmlFor="first_name">名 First Name</label>
        </div>
        <div className="input-field col s6">
          <input value={personalInformation.last_name || ''} onChange={e => onUpdate({last_name: e.target.value})} id="last_name" type="text" className="validate" />
          <label className={personalInformation.last_name? 'active' : ''} htmlFor="last_name">姓 Last Name</label>
        </div>
        <div className="input-field col s6">
          <input value={personalInformation.nick_name || ''} onChange={e => onUpdate({nick_name: e.target.value})} id="nick_name" type="text" />
          <label className={personalInformation.nick_name? 'active' : ''} htmlFor="nick_name">昵称 Preferred name (nickname)</label>
        </div>
        <div className="input-field col s6">
          <input value={personalInformation.other_name || ''} onChange={e => onUpdate({other_name: e.target.value})} id="other_name" type="text" />
          <label className={personalInformation.other_name? 'active' : ''} htmlFor="other_name">曾用名 Other name</label>
        </div>
        <div className="input-field col s6">
          <input value={personalInformation.sex || ''} onChange={e => onUpdate({sex: e.target.value})} id="sex" type="text" />
          <label className={personalInformation.sex? 'active' : ''} htmlFor="sex">性别 Sex</label>
        </div>
        <div className="input-field col s6">
          <input value={personalInformation.date_of_birth || ''} onChange={e => onUpdate({date_of_birth: e.target.value})} id="date_of_birth" type="text" />
          <label className={personalInformation.date_of_birth? 'active' : ''} htmlFor="date_of_birth">生日 Date of birth</label>
        </div>
        <div className="input-field col s6">
          <input value={personalInformation.other_language || ''} onChange={e => onUpdate({other_language: e.target.value})} id="other_language" type="text" />
          <label className={personalInformation.other_language? 'active' : ''} htmlFor="other_language">其他掌握语言 Other languages you are proficient in</label>
        </div>
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  personalInformation: state.profile.personalInformation
}), {})(PersonalInformation)