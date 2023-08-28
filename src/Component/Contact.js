/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../Component/CSS/Contact.css';
import { Link } from "react-router-dom";



function Contact(){
    return (
        <>
     <div class="contact_us_2">
  <div class="responsive-container-block big-container">
    <div class="blueBG">
    </div>
    <div class="responsive-container-block container">
      <form class="form-box">
        <div class="container-block form-wrapper">
          <p class="text-blk contactus-head">
            Get in Touch
          </p>
          <p class="text-blk contactus-subhead">
            Nunc erat cursus tellus gravida.
          </p>
          <div class="responsive-container-block">
            <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
              <p class="text-blk input-title">
                 NAME
              </p>
              <input class="input" id="ijowk" name="FirstName" placeholder="Please enter first name..."/>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p class="text-blk input-title">
                EMAIL
              </p>
              <input class="input" id="ipmgh" name="Email" placeholder="Please enter email..."/>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p class="text-blk input-title">
                PHONE NUMBER
              </p>
              <input class="input" id="imgis" name="PhoneNumber" placeholder="Please enter phone number..."/>
            </div>
            <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
              <p class="text-blk input-title">
                WHAT DO YOU HAVE IN MIND
              </p>
              <textarea class="textinput" id="i5vyy" placeholder="Please enter query..."></textarea>
            </div>
          </div>
          <button class="submit-btn">
            Submit
          </button>
        </div>
        <div class="social-media-links">
          <Link id="ix94i-2" href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"/>
          </Link>
          <Link href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"/>
          </Link>
          <Link href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"/>
          </Link>
          <Link href="#" id="izldf-2">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"/>
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
</>
    );
}
export default Contact;