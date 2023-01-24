import React, {useState} from "react";
import '../Styles/Contacts.css';

function Contacts () {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div className="contact" id="contact1">
            <div className="title">Get in Touch</div>
            <p>I'm currently looking for job, my inbox is always open. Whether you have a question or just want to say hi,
             I’ll try my best to get back to you!</p>
            <div className="row">
              <div className="contact-col">
                <div>
                  <i className="fa fa-home"></i>
                  <span>
                    <h5>730, Dr.Ambedkar Nagar</h5>
                    <p>Adambakkam, Chennai, IN</p>
                  </span>
                </div>
                <div>
                  <i className="fa fa-phone"></i>
                  <span>
                    <h5>+91 9003088540</h5>
                    <p>Weekdays, 10AM to 8PM</p>
                  </span>
                </div>
                <div>
                  <i className="fa-solid fa-envelope"></i>
                  <span>
                    <h5>Haridass046@gmail.com</h5>
                    <p>Mail me to get in touch</p>
                  </span>
                </div>
              </div>

              <div className="contact-col2">
                <form action="/">
                  <input type="text" name="Name" placeholder="Enter Your Name" required />
                  <input type="text" name="Email" placeholder="Enter your Email Adderss" required />
                  <textarea rows="3" name="Message" placeholder="Message"></textarea>
                  
                  {
                    showMessage?<p style={{paddingLeft:"20px",color:"whitesmoke"}}>Message sent</p>:""
                  }
                  <div className="arrange"><button className="contact-btn" type="submit" onClick={()=>{
                      setShowMessage(true);
                      setTimeout(() => {
                        setShowMessage(false);
                      }, 3000);
                  }}>Send Message</button></div>
                </form>
              </div>
            </div>
        </div>
    );
};

export default Contacts;