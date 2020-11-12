/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PersonalInformation from './PersonalInfomation';
import ContactDetails from './ContactDetails';
import Family from './Family';
import HighSchool1 from './HighSchool1';
import HighSchool2 from './HighSchool2';
import College from './College'
import FuturePlans from './FuturePlans'
import Tests from './Tests'
import ExtracurricularActivities from './ExtracurricularActivities'
import Hobbies from './Hobbies'
import Writing from './Writing'

import { updateProfile, fetchProfile, saveProfile } from './profileSlice'
const mapDispatch = { updateProfile, fetchProfile, saveProfile }

const activeMap = {
  1: 'personalInformation',
  2: 'contactDetails',
  3: 'family',
  4: 'highSchool1',
  5: 'highSchool2',
  6: 'college',
  7: 'futurePlans',
  8: 'tests',
  9: 'extracurricularActivities',
  10: 'hobbies',
  11: 'writing',
}

function Profile(props) {

  const { updating, profile, updateProfile, fetchProfile, saveProfile } = props
  const [ active, setActive ] = useState(1)

  const handleUpdate = (a, d) => {
    updateProfile({type: activeMap[a], data: d})
  }

  const handleFetch = a => {
    console.log('profile fetch', a, activeMap[a])
    fetchProfile(activeMap[a])
  }

  const handleSave = a => {
    saveProfile(activeMap[a], profile[activeMap[a]])
  }

  const handleActive = a => {
    if (a !== active) {
      console.log('profile - ', active, a)
      handleSave(active)
      handleFetch(a)
      setActive(a)
    }
  }

  return (
    <div>
      {/* <div className="row" style={{marginTop: '1rem', backgroundColor: '#555555'}}> */}
      <div className="row">
        <div className='col s3'>
          <div className='collection' style={{cursor: 'pointer'}}>
            <Link to='/profile' className='collection-item'>
              <span style={{fontWeight: 400, fontSize: '1.2rem'}}>我的信息</span>
            </Link>
            <a className='collection-item' onClick={_ => handleActive(1)}><span style={{marginLeft: 20}}>基本信息</span></a>
            <a className='collection-item' onClick={_ => handleActive(2)}><span style={{marginLeft: 20}}>联系方式</span></a>
            <a className='collection-item' onClick={_ => handleActive(3)}><span style={{marginLeft: 20}}>家庭</span></a>
            <a className='collection-item' onClick={_ => handleActive(4)}><span style={{marginLeft: 20}}>高中</span>1</a>
            <a className='collection-item' onClick={_ => handleActive(5)}><span style={{marginLeft: 20}}>高中</span>2</a>
            <a className='collection-item' onClick={_ => handleActive(6)}><span style={{marginLeft: 20}}>大学</span></a>
            <a className='collection-item' onClick={_ => handleActive(7)}><span style={{marginLeft: 20}}>未来计划</span></a>
            <a className='collection-item' onClick={_ => handleActive(8)}><span style={{marginLeft: 20}}>标化考试</span></a>
            <a className='collection-item' onClick={_ => handleActive(9)}><span style={{marginLeft: 20}}>课外活动</span></a>
            <a className='collection-item' onClick={_ => handleActive(10)}><span style={{marginLeft: 20}}>兴趣爱好及特长</span></a>
            <a className='collection-item' onClick={_ => handleActive(11)}><span style={{marginLeft: 20}}>文书</span></a>
            <Link to='/admission' className='collection-item'>
              <span style={{fontWeight: 400, fontSize: '1.2rem'}}>我的申请</span>
            </Link>
            <Link to='/profile' className='collection-item'>
              <span style={{fontWeight: 400, fontSize: '1.2rem'}}>我的收藏</span>
            </Link>
            <Link to='/account' className='collection-item'>
              <span style={{fontWeight: 400, fontSize: '1.2rem'}}>账户管理</span>
            </Link>
          </div>
        </div>
        <div className='col s9' style={{padding: '1rem'}}>
          {active === 1?
            <PersonalInformation onUpdate={v => handleUpdate(1, v)} onSave={_ => handleSave(1)} />
          : active === 2?
            <ContactDetails onUpdate={v => handleUpdate(2, v)} onSave={_ => handleSave(2)} />
          : active === 3?
            <Family onUpdate={v => handleUpdate(3, v)} onSave={_ => handleSave(3)} />
          : active === 4?
            <HighSchool1 onUpdate={v => handleUpdate(4, v)} onSave={_ => handleSave(4)} />
          : active === 5?
            <HighSchool2 onUpdate={v => handleUpdate(5, v)} onSave={_ => handleSave(5)} />
          : active === 6?
            <College onUpdate={v => handleUpdate(6, v)} onSave={_ => handleSave(6)} />
          : active === 7?
            <FuturePlans onUpdate={v => handleUpdate(7, v)} onSave={_ => handleSave(7)} />
          : active === 8?
            <Tests onUpdate={v => handleUpdate(8, v)} onSave={_ => handleSave(8)} />
          : active === 9?
            <ExtracurricularActivities onUpdate={v => handleUpdate(9, v)} onSave={_ => handleSave(9)} />
          : active === 10?
            <Hobbies onUpdate={v => handleUpdate(10, v)} onSave={_ => handleSave(10)} />
          : active === 11?
            <Writing onUpdate={v => handleUpdate(11, v)} onSave={_ => handleSave(11)} />
          :
            <></>
          }
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  profile: state.profile,
  updating: state.profile.updating
}), mapDispatch)(Profile)