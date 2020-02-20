import React, { useState } from 'react';
import PersonalInformation from './PersonalInfomation';
import ContactDetails from './ContactDetails';

function Profile() {

  const [ active, setActive ] = useState(1)

  return (
    <div>
      {/* <div className="row" style={{marginTop: '1rem', backgroundColor: '#555555'}}> */}
      <div className="row">
        <div className='col s2'>
          <div className='collection' style={{cursor: 'pointer'}}>
            <a className='collection-item' onClick={_ => setActive(1)}>个人信息</a>
            <a className='collection-item' onClick={_ => setActive(2)}>联系方式</a>
            <a className='collection-item' onClick={_ => setActive(3)}>家庭</a>
            <a className='collection-item' onClick={_ => setActive(4)}>高中1</a>
            <a className='collection-item' onClick={_ => setActive(5)}>高中2</a>
            <a className='collection-item' onClick={_ => setActive(6)}>大学</a>
            <a className='collection-item' onClick={_ => setActive(7)}>未来计划</a>
            <a className='collection-item' onClick={_ => setActive(8)}>标化考试</a>
            <a className='collection-item' onClick={_ => setActive(9)}>课外活动</a>
            <a className='collection-item' onClick={_ => setActive(10)}>兴趣爱好及特长</a>
            <a className='collection-item' onClick={_ => setActive(11)}>文书</a>
          </div>
        </div>
        <div className='col s10' style={{padding: '1rem'}}>
          {active === 1?
            <PersonalInformation />
          : active === 2?
            <ContactDetails />
          : active === 3?
            <div>家庭</div>
          : active === 4?
            <div>高中1</div>
          : active === 5?
            <div>高中2</div>
          : active === 6?
            <div>大学</div>
          : active === 7?
            <div>未来计划</div>
          : active === 8?
            <div>标化考试</div>
          : active === 9?
            <div>课外活动</div>
          : active === 10?
            <div>兴趣爱好及特长</div>
          : active === 11?
            <div>文书</div>
          :
            <div>其他信息</div>
          }
        </div>
      </div>
    </div>
  );
}

export default Profile;
