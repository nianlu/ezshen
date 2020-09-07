/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { updateProfile, fetchProfile, saveProfile } from './profileSlice'
// const mapDispatch = { updateProfile, fetchProfile, saveProfile }
import { fetchPersonalInformation } from '../profile/profileSlice';
const mapDispatch = { fetchPersonalInformation }

function Admission(props) {
  const { fetchPersonalInformation } = props

  const [ active, setActive ] = useState(1)


  return (
    <div>
      {/* <div className="row" style={{marginTop: '1rem', backgroundColor: '#555555'}}> */}
      <div className="row">
        <div className='col s3'>
          <div className='collection' style={{cursor: 'pointer'}}>
            <Link to='/profile' onClick={_ => fetchPersonalInformation()}>
              <a className='collection-item' onClick={_ => {}}>个人信息</a>
            </Link>
            <a className='collection-item' onClick={_ => {}}>我的申请</a>
            <a className='collection-item' onClick={_ => {}} style={{marginLeft: 50}}>已经提交</a>
            <a className='collection-item' onClick={_ => {}} style={{marginLeft: 50}}>正在进行</a>
            <Link to='/admission'>
              <a className='collection-item' onClick={_ => {}}>我的收藏</a>
            </Link>
            <Link to='/account'>
              <a className='collection-item' onClick={_ => {}}>账户管理</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  // profile: state.profile,
  // updating: state.profile.updating
}), mapDispatch)(Admission)