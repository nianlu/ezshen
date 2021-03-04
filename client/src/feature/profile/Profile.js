/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import SideMenu from '../component/SideMenu'

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

  useEffect(() => {
    setActive(1)
    fetchProfile(activeMap[1])
  }, [])

  return (
    <div className='columns'>
      <div className='column is-2' style={{margin: '0.75rem', minWidth: '14rem'}}>
        <SideMenu active='profile'>
          <ul style={{margin: '0.5rem 0.75rem'}}>
            <li><a className={active === 1? 'is-active' : ''} onClick={_ => handleActive(1)}>基本信息</a></li>
            <li><a className={active === 2? 'is-active' : ''} onClick={_ => handleActive(2)}>联系方式</a></li>
            <li><a className={active === 3? 'is-active' : ''} onClick={_ => handleActive(3)}>家庭</a></li>
            <li><a className={active === 4? 'is-active' : ''} onClick={_ => handleActive(4)}>高中1</a></li>
            <li><a className={active === 5? 'is-active' : ''} onClick={_ => handleActive(5)}>高中2</a></li>
            <li><a className={active === 6? 'is-active' : ''} onClick={_ => handleActive(6)}>大学</a></li>
            <li><a className={active === 7? 'is-active' : ''} onClick={_ => handleActive(7)}>未来计划</a></li>
            <li><a className={active === 8? 'is-active' : ''} onClick={_ => handleActive(8)}>标化考试</a></li>
            <li><a className={active === 9? 'is-active' : ''} onClick={_ => handleActive(9)}>课外活动</a></li>
            <li><a className={active === 10? 'is-active' : ''} onClick={_ => handleActive(10)}>兴趣爱好及特长</a></li>
            <li><a className={active === 11? 'is-active' : ''} onClick={_ => handleActive(11)}>文书</a></li>
          </ul>
        </SideMenu>
      </div>
      <div className='column is-10' style={{padding: '1rem'}}>
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
  )
}

export default connect(state => ({
  profile: state.profile,
  updating: state.profile.updating
}), mapDispatch)(Profile)