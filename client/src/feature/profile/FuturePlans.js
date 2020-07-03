import React, { useState } from 'react';
import { connect } from 'react-redux'

function FuturePlans(props) {
  const { futurePlans, onUpdate, onSave } = props
  return (
    <div className='col s12'>
      <div className="row">
        <h5>未来计划</h5><span>Future Plans</span>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input value={futurePlans.career_interest || ''} onChange={e => onUpdate({career_interest: e.target.value})} id="career_interest" type="text" />
          <label className={futurePlans.career_interest? 'active' : ''} htmlFor="career_interest">职业规划 Career interest</label>
        </div>
        <div className="input-field col s6">
          <input value={futurePlans.highest_degree || ''} onChange={e => onUpdate({highest_degree: e.target.value})} id="highest_degree" type="text" />
          <label className={futurePlans.highest_degree? 'active' : ''} htmlFor="highest_degree">计划获得的最高学历 Highest degree you intend to earn</label>
        </div>
      </div>
      <div>
        <span class="waves-effect waves-light btn" onClick={_ => onSave()} style={{float: 'right'}}>保存</span>
      </div>
    </div>
  );
}

export default connect(state => ({
  futurePlans: state.profile.futurePlans
}), {})(FuturePlans)