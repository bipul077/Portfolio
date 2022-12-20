import React from 'react'
import './Services.css'

export default function Services() {
  return (
    <>
    <div className="image-grid">
      <div className="mainimage image-grid-col-2 image-grid-row-2">
        <img className="" src="static/images/s1.jpg" alt="" height="200"/>
        <div className="des">Dining</div>
      </div>
      <div className="mainimage">
        <img className="" src="static/images/s2.jpg" alt="" height="200"/>
        <div className="des">Room Services</div>
      </div>
      <div className="mainimage">
        <img className="" src="static/images/s3.jpg" alt="" height="200"/>
        <div className="des">Barista Coffee</div>
      </div>
      <div className="mainimage">
        <img className="" src="static/images/s4.jpg" alt="" height="200"/>
        <div className="des">Drinks & Bar</div>
      </div>
      <div className="mainimage">
        <img className="" src="static/images/s5.jpg" alt="" height="200"/>
        <div className="des">Care</div>
      </div>
      {/* <img src="static/images/s2.jpg" alt=""/>
      <img src="static/images/s3.jpg" alt=""/>
      <img src="static/images/s4.jpg" alt=""/>
      <img src="static/images/s5.jpg" alt=""/> */}
    </div>
    </>
  )
}
