import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className="Footer">
      <div className="subcontainer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
        <ul className="socialicon">
          <li><a href="#"><i className='fa fa-twitter'></i></a></li>
          <li><a href="#"><i className='fa fa-facebook-f'></i></a></li>
          <li><a href="#"><i className='fa fa-instagram'></i></a></li>
          <li><a href="#"><i className='fa fa-youtube'></i></a></li>
        </ul>
        <div className="text">
          <h6>Global Group of Company</h6>
          <p>@Copyright issue 2022</p>
        </div>
      </div>
    </div>
  )
}
