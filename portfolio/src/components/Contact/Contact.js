import React,{useState} from 'react';
import "./Contact.css";
import validator from 'validator';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/contactapi/';

export default function Contact() {
  const[contactdata,setcontactdata]=useState({
    'uname':'',
    'email':'',
    'message':'',
    'status':''
  });
  const [emailError, setEmailError] = useState('')


  //Change Element value
  const handleChange=(event)=>{
    // console.log(event.target.name,event.target.value)
    if (event.target.name=='email'){
        let em = event.target.value;
        if (validator.isEmail(em)) {
            setEmailError('Valid Email')
          } else {
            setEmailError('Enter valid Email!')
          }
    }
    setcontactdata({
        ...contactdata,//separate operator 
        [event.target.name]:event.target.value
    });
  }

    //Submit form
  const submitForm=()=>{
    const contactformdata = new FormData();
    contactformdata.append("uname",contactdata.uname)
    contactformdata.append("email",contactdata.email)
    contactformdata.append("message",contactdata.message)
    
    try{
        if(emailError==='Valid Email'){
            axios.post(baseUrl,contactformdata).then((response)=>{
                setcontactdata({//for making the form empty after submitting
                    'uname':'',
                    'email':'',
                    'message':'',
                    'status':'success'
                });
            });
        }
        else{
            setcontactdata({'status':'error'})
        }
    }catch(error){
        console.log(error);
        setcontactdata({'status':'error'})
    }
  }

  return (
    <div>
        <section className="contact">
<<<<<<< HEAD
            {/* <div class = "content">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus arcu, consectetur sed pellentesque ac, consectetur ut risus. In facilisis elit vitae feugiat pretium. Vivamus libero purus, aliquet vitae ex et, ultricies egestas sapien. Aliquam pulvinar sem sit amet leo maximus pulvinar. Integer dictum augue nec gravida lacinia. Aliquam cursus venenatis efficitur. Praesent elementum eleifend venenatis. Aliquam faucibus sed enim eget fermentum.</p>                
            </div> */}
            {contactdata.status=='success' && <p className="text-success">Thanks for contacting us</p>}
            {contactdata.status=='error' && <p className="text-danger">Something wrong happened!!</p>}
=======
>>>>>>> ac20f598318a34cb74db7172ca07117f132c528e
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
                            <p>globalgroupofcompany<span>ceooffice@gmail.com</span></p>
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
                    {/* <form> */}
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="textC" name = "uname" onChange={handleChange} value={contactdata.uname}></input>
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="textC" name = "email" required="required" onChange={handleChange}  value={contactdata.email}></input>
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <input type="textC" name = "message" required="required" onChange={handleChange}  value={contactdata.message}></input>
                            <span>Type your message..</span>
                            <p className="validemail">{emailError}</p>
                        </div>
                        <div className="inputBox">
                            <button className="btn btn-danger" onClick={submitForm} type = "submit">Send</button>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </section>
    </div>
  )
}
