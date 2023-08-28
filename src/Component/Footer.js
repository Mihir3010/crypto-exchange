import React from "react";
import logo from "./CSS/logo.png";
 function Footer(){
    return (
      <footer class="footer">

      <div class="footer-top" data-section>
        <div class="container">
          <div class="footer-brand">
            <div class="logo">
              <img src={logo} width="50" height="50" alt="Cryptex logo"/>
              Cryptex
              </div>
            <h2 class="footer-title">Let's talk! 🤙</h2>
              +12 345 678 9101 
            <a href="mailto:hello.cryptex@gmail.com" class="footer-contact-link">hello.cryptex@gmail.com</a>
            <address class="footer-contact-link">
              Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
            </address>
          </div>
          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Products</p>
            </li>
  
            <li>
            Spot  
            </li>
  
            <li>
              Inverse Perpetual 
            </li>
  
            <li>
                USDT Perpetual  
            </li>
  
            <li>
              Exchange  
            </li>
  
            <li>
                Launchpad 
            </li>
  
            <li>
              Binance Pay 
            </li>
  
          </ul>
  
          <ul class="footer-list">
  
            <li>
              <p class="footer-list-title">Services</p>
            </li>
  
            <li>
              Buy Crypto 
            </li>
  
            <li>
             Markets 
            </li>
  
            <li>
             Tranding Fee 
            </li>
  
            <li>
               Affiliate Program 
            </li>
  
            <li>
              Referral Program
            </li>
  
            <li>
              API 
            </li>
  
          </ul>
  
          <ul class="footer-list">
  
            <li>
              <p class="footer-list-title">Support</p>
            </li>
  
            <li>
             Bybit Learn
            </li>
  
            <li>
             Help Center
            </li>
  
            <li>
             User Feedback
            </li>
  
            <li>
             Submit a request 
            </li>
  
            <li>
              API Documentation
            </li>
  
            <li>
             Trading Rules 
            </li>
  
          </ul>
  
          <ul class="footer-list">
  
            <li>
              <p class="footer-list-title">About Us</p>
            </li>
  
            <li>
              About Bybit 
            </li>
  
            <li>
              Authenticity Check 
            </li>
  
            <li>
             Careers 
            </li>
  
            <li>
              Business Contacts
            </li>
  
            <li>
             Blog
            </li>
  
          </ul>
  
        </div>
      </div>
  
       
    </footer>
  

    );
}
export default Footer;
