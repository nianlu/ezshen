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
        <div className="input-field col s12">
          <input value={contactDetails.home_address || ''} onChange={e => onUpdate({home_address: e.target.value})} id="home_address" type="text" />
          <label className={contactDetails.home_address? 'active' : ''} htmlFor="home_address">家庭住址 Permanent home address</label>
        </div>
        <div className="input-field col s12">
          <input value={contactDetails.mail_address || ''} onChange={e => onUpdate({mail_address: e.target.value})} id="mail_address" type="text" />
          <label className={contactDetails.mail_address? 'active' : ''} htmlFor="mail_address">邮寄地址 Mailing address</label>
        </div>
        <div className="input-field col s6">
          <input value={contactDetails.email || ''} onChange={e => onUpdate({email: e.target.value})} id="email" type="text" />
          <label className={contactDetails.email? 'active' : ''} htmlFor="email">电子邮箱 E-mail address</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input value={contactDetails.phone_type || ''} onChange={e => onUpdate({phone_type: e.target.value})} id="phone_type" type="text" />
          <label className={contactDetails.phone_type? 'active' : ''} htmlFor="phone_type">联系电话类型 Preferred phone type</label>
        </div>
        <div className="input-field col s6">
          <input value={contactDetails.phone_number || ''} onChange={e => onUpdate({phone_number: e.target.value})} id="phone_number" type="text" />
          <label className={contactDetails.phone_number? 'active' : ''} htmlFor="phone_number">联系号码 Preferred phone number</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input value={contactDetails.other_phone_type || ''} onChange={e => onUpdate({other_phone_type: e.target.value})} id="other_phone_type" type="text" />
          <label className={contactDetails.other_phone_type? 'active' : ''} htmlFor="other_phone_type">备选联系电话类型 Alternative preferred phone type</label>
        </div>
        <div className="input-field col s6">
          <input value={contactDetails.other_phone_number || ''} onChange={e => onUpdate({other_phone_number: e.target.value})} id="other_phone_number" type="text" />
          <label className={contactDetails.other_phone_number? 'active' : ''} htmlFor="other_phone_number">备选联系号码 Alternative preferred phone number</label>
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