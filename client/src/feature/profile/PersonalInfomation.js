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
          <label for="first_name">名 First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" />
          <label for="last_name">姓 Last Name</label>
        </div>
        <div className="input-field col s6">
          <input id="Preferred name (nickname)" type="text" />
          <label for="Preferred name (nickname)">昵称 Preferred name (nickname)</label>
        </div>
        <div className="input-field col s6">
          <input id="Other name" type="text" />
          <label for="Other name">曾用名 Other name</label>
        </div>
        <div className="input-field col s6">
          <input id="Sex" type="text" />
          <label for="Sex">性别 Sex</label>
        </div>
        <div className="input-field col s6">
          <input id="Date of birth" type="text" />
          <label for="Date of birth">生日 Date of birth</label>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
