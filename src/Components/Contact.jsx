import emailjs from '@emailjs/browser';
import { useRef } from "react";
import swal from 'sweetalert';
import profile_pic from '../images/profile_pic.jpg'
import "./Contact.css";
function Contact() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ycuq9nt', 'template_7x3t911', form.current, 'qrL-i0m5wuucQCPEo')
      .then(
        (result) => {
          swal("Sent!", "Message Sent Successfully!", "success");
          console.log(result.text);
        },
        (error) => {
          swal("Not Sent!", "Sorry About That, My Fault!", "failure");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-left">
          <h1 className="text-left">Email Contact For Business and Support</h1>

          {/* <!-- contact form --> */}
          <form style ={{width:'90%', margin:'0 auto'}} ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div className="col-md-6 col-10 mx-auto"></div>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div className="form-group">
              <label for="email_body">Message</label>
              <textarea
                name="message"
                className="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{marginTop: '10px'}}>
              Submit
            </button>
          </form>
          <div className="container-fluid" style={{marginTop:'20px',marginLeft:'-5px'}}>
            <img className="photo" src={profile_pic}></img>
            <div className="row">
            <h1 style={{margin_top: '0px'}}>Personal Contact Info</h1>
            <h2 style={{margin_top: '0px'}}>I would love to talk</h2>
            <p style={{fontWeight: '900'}}> Name: Bishoy Moussa </p>
            <p style={{fontWeight: '900'}}> email: bishoy_galoaa@aucegypt.edu</p>
            <p style={{fontWeight: '900'}}> Tel: +201223428415</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;