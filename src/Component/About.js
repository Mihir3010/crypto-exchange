import React from 'react';
import './CSS/About.css';
import bit from "./CSS/bit.jpg";
import getty from "./CSS/getty.jpg";

function About(){

  return (
<>   
         
<div class="container">

   <div class="about">
   <div class="team">
      <h1>About us        
      </h1>
   </div>
      <div class="left">
         
         <h1>About cryptax</h1>
        
         <p>We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto.</p>

         <p>We started in 2021 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin. Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.</p>

      </div>
      <div class="right">
      <img src={getty} alt="hero banner" class="w-100"/>
      </div>
      <div class="clear"></div>
   </div>

   <div class="mission">
    <div class="left">
      <img src={bit}  alt="hero banner" class="w-100"/>
      </div>
      <div class="right">
         <h1>What is cryptocurrency?</h1>
       
         <p>Cryptocurrency, or crypto, is a digital payment platform that eliminates the need to carry physical money. It exists only in digital form, and although people mainly use it for online transactions, you can make some physical purchases. Unlike traditional money printed only by the government, several companies sell cryptocurrency. </p>

         <p>Cryptocurrencies are fungible, meaning the value remains the same when bought, sold, or traded. Cryptocurrency isn’t the same as non-fungible tokens (NFTs) with variable values. For example, one dollar in crypto will always be one dollar, whereas the value of one NFT dollar depends on the digital asset it’s attached to.</p>

      </div>
      <div class="clear"></div>
   </div>
</div>

   
</>

  );
}
export default About;