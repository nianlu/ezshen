import React, { useState } from 'react';

function PersonalInformation() {

  return (
    <div className='col s12'>
      <div className="row">
        <h5>个人信息</h5><span>Personal Information</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
