import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div>
        <section className="contact">
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
