/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import SideMenu from '../component/SideMenu'

// import { updateProfile, fetchProfile, saveProfile } from './profileSlice'
// const mapDispatch = { updateProfile, fetchProfile, saveProfile }
import { fetchPersonalInformation } from '../profile/profileSlice';
const mapDispatch = { fetchPersonalInformation }

function Admission(props) {
  const { fetchPersonalInformation } = props

  const [ active, setActive ] = useState(1)


  return (
    <div className='columns'>
      <div className='column is-2' style={{margin: '0.75rem', minWidth: '14rem'}}>
        <SideMenu active='admission' />
      </div>
      <div className='column is-10'>
      </div>
    </div>
  )
}

export default connect(state => ({
  // profile: state.profile,
  // updating: state.profile.updating
}), mapDispatch)(Admission)