import React,{useEffect} from 'react'
import './Services.css'

export default function Services() {
  useEffect(() => {
    const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    let x = e.pageX;
    let y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);
  })
  return (
    <div>
      <section class="gallery">
  <div class="container">
    <div class="grid">
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
          <img src="static/images/s1.jpg" />
          <figcaption class="img-content">
            <h2 class="title">Dine In</h2>
            <h3 class="category">Dial 9812345678</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Dine In</h2>
            <h3 class="category">Dial 9812345678</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
          <img src="static/images/s2.jpg" />
          <figcaption class="img-content">
            <h2 class="title">Room Service</h2>
            <h3 class="category">Dial 9812345678</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Room Service</h2>
            <h3 class="category">Dial 9812345678</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
          <img src="static/images/s3.jpg"/>
          <figcaption class="img-content">
            <h2 class="title">Barista</h2>
            <h3 class="category">Dial 9812345678</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Barista</h2>
            <h3 class="category">Dial 9812345678</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <img src="static/images/s4.jpg"/>
          <figcaption class="img-content">
            <h2 class="title">Bar</h2>
            <h3 class="category">Dial 9812345678</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Bar</h2>
            <h3 class="category">Dial 9812345678</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <img src="static/images/s5.jpg"/>
          <figcaption class="img-content">
            <h2 class="title">Babysitting</h2>
            <h3 class="category">Dial 9812345678</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Babysitting</h2>
            <h3 class="category">Dial 9812345678</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12">
        <figure class="img-container">
          <img src="static/images/s6.jpg"/>
          <figcaption class="img-content">
            <h2 class="title">24/7 Front Desk</h2>
            <h3 class="category">Dial 9812345678</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">24/7 Front Desk</h2>
            <h3 class="category">Dial 9812345678</h3>
          </span>
        </figure>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
