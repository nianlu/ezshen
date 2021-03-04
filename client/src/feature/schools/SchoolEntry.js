/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import Gallery from 'react-photo-gallery'
// import Lightbox from 'react-lightbox-component';

import pic1 from '../pic/villanova.jpg'

// import { updateProfile, fetchProfile, saveProfile } from './profileSlice'
// const mapDispatch = { updateProfile, fetchProfile, saveProfile }

// import { fetchPersonalInformation } from '../profile/profileSlice';
// const mapDispatch = { fetchPersonalInformation }

function SchoolEntry(props) {
  const { fetchPersonalInformation } = props

  const [ active, setActive ] = useState(1)

  const pic = [
    {
      // src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      src: '../pic/villanova.jpg',
      width: 4,
      height: 3
    }
  ]

  return (
    <div>
      {/* <div className="row" style={{marginTop: '1rem', backgroundColor: '#555555'}}> */}
      <div className="row">
        <div className='col s3'>
          <div className='collection' style={{cursor: 'pointer'}}>
            <a className='collection-item' onClick={_ => {}}>基本信息</a>
            <a className='collection-item' onClick={_ => {}}>图片</a>
            <a className='collection-item' onClick={_ => {}}>详细资料</a>
          </div>
        </div>
        <div className='col s9'>
          <div className="row">
            <div className="col s6" style={{paddingTop: '1rem'}}>
              <h4>维拉诺瓦大学</h4>
              <h5>Villanova University</h5>
              {/* <div>添加标签: 
                <div className="chip">公立学校<i className="close material-icons">x</i></div>
                <div className="chip">私立学校<i className="close material-icons">x</i></div>
                <div className="chip">排名前100<i className="close material-icons">x</i></div>
                <div className="chip">不需要GRE<i className="close material-icons">x</i></div>
              </div> */}
              {/* <a>查看所有</a> */}
            </div>
            <div className="col s6" style={{paddingTop: '2rem'}}>
              <h7>宾夕法尼亚州</h7>
            </div>
          </div>
          <div className="row" style={{marginTop: '2rem', backgroundColor: 'lightblue'}}>
            {/* <Lightbox images={
              [
                {
                  src: 'http://localhost:3000/college.jpg',
                  // src: '../pic/villanova.jpg',
                  // title: 'image title',
                  // description: 'image description'
                }
              ]
            }/> */}
            {/* <div className="col s4" style={{backgroundColor: 'lightgreen', height: '15rem', padding: '0'}}>
              <img src={pic1} style={{height: '100%'}} />
            </div>
            <div className="col s4">
              photo 2
            </div>
            <div className="col s4">
              photo 3
            </div> */}
          </div>
          <div className="row" style={{height: '100rem'}}>
            <div>维拉诺瓦大学（Villanova University），是位于美国宾夕法尼亚州费城西北郊维拉诺瓦的一所私立大学。它成立于1842年，是宾夕法尼亚州历史最悠久，规模最大的天主教大学。
该大学拥有六所学院（文理学院，维拉诺瓦商学院，工程学院，路易斯·菲茨帕特里克护理学院，专业职业学院，维拉诺瓦大学查尔斯·维杰法学院），共计约11,000名本科生，研究生和法学学生。
维拉诺瓦教导学生学会批判性思考，富有同情心，并能够在为他人服务的同时取得成功。学校培养学生成为可以在生活中随处带来积极改变的领导者。
US NEWS 2020 美国国家大学排名46位。</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolEntry

// export default connect(state => ({
//   // profile: state.profile,
//   // updating: state.profile.updating
// }), {})(SchoolEntry)