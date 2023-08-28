/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./CSS/Wallet.css";
import coin1 from '../Component/CSS/coin1.png';
import coin3 from '../Component/CSS/coin3.png';
import coin8 from '../Component/CSS/coin8.png';
import wallet from './CSS/wallet.png';


function Wallet(){
    return(
<>

<div class="container">
    <div class="wallet">
      <aside class="left-wallet">
        <div class="wallet-head">
          <h1> My Wallets </h1>
          
          <div class="modal-open">
           <img src= {wallet} height={70} width={70} />
          </div>
       
        </div>
       
        <div class="cc-select">          
        </div>
      </aside>
      <content class="right-trans">
        <h1> Current Balance </h1>
        <h2> + 25,689</h2>
          <div class="right-b">  
          <img src = {coin1} height={50} widget={50} /> <h3> Bitcoin</h3>
        
          <div className="right-g">
           <h3> +9,850</h3>
          
           </div>
        
         </div>
         <div class="right-b">  
          <img src = {coin3} height={50} widget={50} /> 
          <h3> Tether</h3>
         
          <div className="right-g">
           <h3> -1,230</h3>
           </div>
        
         </div>
         <div class="right-b">  
          <img src = {coin8} height={50} widget={50} /> 
          <h3> polygone</h3>
          <div class="right-g">
           <h3> +4,689</h3>
           </div>
        
         </div>
        <div class="trans-list"> 
        
        </div>
      </content>
    </div>
  </div>

 
   
</>


    );
   
}
export default Wallet;