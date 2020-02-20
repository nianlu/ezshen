import React, { useState } from 'react';

function ContactDetails() {
  return (
    <div className='col s12'>
      <div className="row">
        <h5>联系方式</h5><span>Contact Details</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="Permanent home address" type="text" className="validate" />
          <label for="Permanent home address">家庭住址 Permanent home address</label>
        </div>
        <div className="input-field col s6">
          <input id="Mailing address" type="text" className="validate" />
          <label for="Mailing address">邮寄地址 Mailing address</label>
        </div>
        <div className="input-field col s6">
          <input id="E-mail address" type="text" className="validate" />
          <label for="E-mail address">电子邮箱 E-mail address</label>
        </div>
        <div className="input-field col s6">
          <input id="Preferred phone type" type="text" className="validate" />
          <label for="Preferred phone type">联系电话类型 Preferred phone type</label>
        </div>
        <div className="input-field col s6">
          <input id="Preferred phone number" type="text" className="validate" />
          <label for="Preferred phone number">联系号码 Preferred phone number</label>
        </div>
        <div className="input-field col s6">
          <input id="Alternative preferred phone type" type="text" className="validate" />
          <label for="Alternative preferred phone type">备选联系电话类型 Alternative preferred phone type</label>
        </div>
        <div className="input-field col s6">
          <input id="Alternative preferred phone number" type="text" className="validate" />
          <label for="Alternative preferred phone number">备选联系号码 Alternative preferred phone number</label>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;