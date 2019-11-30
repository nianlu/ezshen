import React, { useState } from 'react';

function Profile() {

  const [ active, setActive ] = useState(1)

  return (
    <div>
      {/* <div className="row" style={{marginTop: '1rem', backgroundColor: '#555555'}}> */}
      <div className="row">
        <div className='col s2'>
          <div className='collection'>
            <a className='collection-item' onClick={_ => setActive(1)}>基本信息</a>
            <a className='collection-item' onClick={_ => setActive(2)}>成绩信息</a>
            <a className='collection-item' onClick={_ => setActive(3)}>其他信息</a>
          </div>
        </div>
        <div className='col s10' style={{paddingTop: '1rem'}}>
          {active === 1?
            <div>基本信息</div>
            : active === 2?
            <div>成绩信息</div>
            :
            <div>其他信息</div>
          }

        </div>
      </div>
    </div>
  );
}

export default Profile;
