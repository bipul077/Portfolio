import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div>
        <section className="contact">
            {/* <div class = "content">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus arcu, consectetur sed pellentesque ac, consectetur ut risus. In facilisis elit vitae feugiat pretium. Vivamus libero purus, aliquet vitae ex et, ultricies egestas sapien. Aliquam pulvinar sem sit amet leo maximus pulvinar. Integer dictum augue nec gravida lacinia. Aliquam cursus venenatis efficitur. Praesent elementum eleifend venenatis. Aliquam faucibus sed enim eget fermentum.</p>                
            </div> */}
            <div className="containerC">
                <div className = "contactInfo">
                    <div className = "box">
                        <div className = "icon"><i class="ri-map-pin-line"></i></div>
                        <div className = "textC">
                            <h3>Address</h3>
                            <p>Kathmandu Buddhanagar</p>
                        </div>
                    </div>
                    <div className = "box">
                        <div className = "icon"><i class="ri-mail-line"></i></div>
                        <div className = "textC">
                            <h3>Email</h3>
                            <p>globalgroupofcompanyceooffice@gmail.com</p>
                        </div>
                    </div>
                    <div className = "box">
                        <div className = "icon"><i class="ri-phone-line"></i></div>
                        <div className = "textC">
                            <h3>Phone No.</h3>
                            <p>9812345678</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="textC" name = "" required="required"></input>
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="textC" name = "" required="required"></input>
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <input type="textC" name = "" required="required"></input>
                            <span>Type your message..</span>
                        </div>
                        <div className="inputBox">
                            <input type = "submit" name = "" value="Send"></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}
