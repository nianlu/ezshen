import React, { useState } from 'react';
import { connect } from 'react-redux'

function Writing(props) {
  const { writing, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>文书</h5><span>Writing</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
        {/* 文书	Personal Essay	个人陈述 */}
          <input value={writing.personal_essay || ''} onChange={e => onUpdate({personal_essay: e.target.value})} id="personal_essay" type="text" />
          <label className={writing.personal_essay? 'active' : ''} htmlFor="personal_essay">个人陈述 Personal Essay</label>
        </div>
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  writing: state.profile.writing
}), {})(Writing)