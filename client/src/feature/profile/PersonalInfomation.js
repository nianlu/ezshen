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
          <label htmlFor="first_name">名 First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" />
          <label htmlFor="last_name">姓 Last Name</label>
        </div>
        <div className="input-field col s6">
          <input id="Preferred name (nickname)" type="text" />
          <label htmlFor="Preferred name (nickname)">昵称 Preferred name (nickname)</label>
        </div>
        <div className="input-field col s6">
          <input id="Other name" type="text" />
          <label htmlFor="Other name">曾用名 Other name</label>
        </div>
        <div className="input-field col s6">
          <input id="Sex" type="text" />
          <label htmlFor="Sex">性别 Sex</label>
        </div>
        <div className="input-field col s6">
          <input id="Date of birth" type="text" />
          <label htmlFor="Date of birth">生日 Date of birth</label>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
