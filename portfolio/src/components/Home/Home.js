import React,{useEffect} from 'react'
import HomeContents from '../HomeContents/HomeContents';
import './Home.css'
export default function Home() {
  useEffect(() => {
    // let stars = document.getElementById('stars');
    // let moon = document.getElementById('moon');
    let behind = document.getElementById('mountains_behind');
    let text = document.getElementById('text');
    // let btn = document.getElementById('homebtn');
    let mountains_front = document.getElementById('mountains_front');
  
    window.addEventListener('scroll',function(){
      let value = window.scrollY;
      // stars.style.left = value * 0.25 + 'px';
      // moon.style.top = value * 1.05 + 'px';
      behind.style.bottom = value * 0 + 'px';
      mountains_front.style.bottom = value * 0 + 'px';
      text.style.marginRight = value * 4 + 'px';
      text.style.marginTop = value * 1 + 'px';
    })
  });

  
  return (
    <div>
      <script>

      </script>
      <section className='asection'>
        {/* <img src="images/stars.png" id="stars"/> */}
        {/* <img src="static/images/sun.png" id="moon"/> */}
        <img src="static/images/hotelback.png" id="mountains_behind"/>
        <h2 className="text" id="text">Global Group Of Company</h2>
        {/* <a href="#" id="homebtn">Explore</a> */}
        <img src="static/images/hotelfront.png" id="mountains_front"/>
      </section>
      <HomeContents/>
    </div>
  )
}
