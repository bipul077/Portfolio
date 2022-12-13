import React,{useEffect} from 'react'
import './Home.css'
export default function Home() {
  useEffect(() => {
    // let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let behind = document.getElementById('mountains_behind');
    let text = document.getElementById('text');
    // let btn = document.getElementById('homebtn');
    let mountains_front = document.getElementById('mountains_front');
  
    window.addEventListener('scroll',function(){
      let value = window.scrollY;
      // stars.style.left = value * 0.25 + 'px';
      moon.style.top = value * 1.05 + 'px';
      behind.style.bottom = value * 0 + 'px';
      mountains_front.style.bottom = value * 0 + 'px';
      text.style.marginRight = value * 4 + 'px';
      text.style.marginTop = value * 1 + 'px';
    })
  });
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  return (
    <div>
      <script>

      </script>
      <section className='asection'>
        {/* <img src="images/stars.png" id="stars"/> */}
        <img src="static/images/sun.png" id="moon"/>
        <img src="static/images/swb.png" id="mountains_behind"/>
        <h2 className="text" id="text">Global Group Of Company</h2>
        {/* <a href="#" id="homebtn">Explore</a> */}
        <img src="static/images/front.png" id="mountains_front"/>
      </section>
  <section className="bsection">
    <div className="container reveal">
      <h2>Caption</h2>
      <div className="text-container">
        <div className="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
        <div className="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
        <div className="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
      </div>
    </div>
  </section>

<section className="bsection">
  <div className="container reveal">
    <h2>Caption</h2>
    <div className="text-container">
      <div className="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div className="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div className="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bsection">
  <div className="container reveal">
    <h2>Caption</h2>
    <div className="text-container">
      <div className="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div className="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div className="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
