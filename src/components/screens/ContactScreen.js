import React from "react";

const ContactScreen = () => {
  return (
    <div className="contact-screen">
      <div className="contact-title">
        <h1> Contact me </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="contact">
        <div className="contact-info">
          <div className="contact-box">
            <img
              src="https://img.icons8.com/small/452/address.png"
              class="contact-icon"
            ></img>
            <div className="contact-box-detail">
              <h4>Address</h4>
              <p>Thu Duc, Ho Chi Minh</p>
            </div>
          </div>
          <div className="contact-box">
            <img
              src="https://toppng.com/uploads/preview/iphone-telephone-logo-computer-icons-red-call-icon-11553520215xtqxhnnj6r.png"
              class="contact-icon"
              alt="No image"
            ></img>
            <div className="contact-box-detail">
              <h4>Number</h4>
              <p>0946081581</p>
            </div>
          </div>
          <div className="contact-box">
            <img
              src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png"
              class="contact-icon"
              alt="No image"
            ></img>
            <div className="contact-box-detail">
              <h4>Email</h4>
              <a href="mailto:nhat.nguyen123@hcmut.edu.vn">
                nhat.nguyen123@hcmut.edu.vn
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="row">
            <div className="input50">
              <input type="text" placeholder="First Name"></input>
            </div>
            <div className="input50">
              <input type="text" placeholder="Last Name"></input>
            </div>
          </div>
          <div className="row">
            <div className="input50">
              <input type="email" placeholder="Email"></input>
            </div>
            <div className="input50">
              <input type="text" placeholder="Phone"></input>
            </div>
          </div>
          <div className="row">
            <div className="input100">
              <textarea type="text" placeholder="Message"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="input100">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
