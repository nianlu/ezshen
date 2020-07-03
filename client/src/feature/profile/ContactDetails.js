import React, { useState } from 'react';
import { connect } from 'react-redux'

function ContactDetails(props) {

  const { contactDetails, onUpdate, onSave } = props
  
  return (
    <div className='col s12'>
      <div className="row">
        <h5>联系方式</h5><span>Contact Details</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="Permanent home address" type="text" className="validate" />
          <label htmlFor="Permanent home address">家庭住址 Permanent home address</label>
        </div>
        <div className="input-field col s6">
          <input id="Mailing address" type="text" className="validate" />
          <label htmlFor="Mailing address">邮寄地址 Mailing address</label>
        </div>
        <div className="input-field col s6">
          <input id="E-mail address" type="text" className="validate" />
          <label htmlFor="E-mail address">电子邮箱 E-mail address</label>
        </div>
        <div className="input-field col s6">
          <input id="Preferred phone type" type="text" className="validate" />
          <label htmlFor="Preferred phone type">联系电话类型 Preferred phone type</label>
        </div>
        <div className="input-field col s6">
          <input id="Preferred phone number" type="text" className="validate" />
          <label htmlFor="Preferred phone number">联系号码 Preferred phone number</label>
        </div>
        <div className="input-field col s6">
          <input id="Alternative preferred phone type" type="text" className="validate" />
          <label htmlFor="Alternative preferred phone type">备选联系电话类型 Alternative preferred phone type</label>
        </div>
        <div className="input-field col s6">
          <input id="Alternative preferred phone number" type="text" className="validate" />
          <label htmlFor="Alternative preferred phone number">备选联系号码 Alternative preferred phone number</label>
        </div>
        <div className="input-field col s6">
          <input value={contactDetails.date_of_birth || ''} onChange={e => onUpdate({date_of_birth: e.target.value})} id="date_of_birth" type="text" />
          <label className={contactDetails.date_of_birth? 'active' : ''} htmlFor="date_of_birth">生日 Date of birth</label>
        </div>
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  contactDetails: state.profile.contactDetails
}), {})(ContactDetails)