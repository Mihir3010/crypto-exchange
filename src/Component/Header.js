import React from "react";
import "../Component/CSS/H1.css";
import { Link } from "react-router-dom";
import logo from "./CSS/logo.png";

function Header(){
    return(

<>
<header class="header" data-header>
    <div class="container">
      <div class="log">
        <img src= {logo} width="72" height="72" alt="Cryptex logo"/>
        <b class= "b" > Cryptex </b>
       </div>

      <nav class="navbar" data-navbar>
        <ul class="navbar-list">

          <li class="navbar-item">
            <Link to= "/"class="navbar-link active" data-nav-link>Homepage </Link>
          </li>

          <li class="navbar-item">
            <Link to ="/Market" class="navbar-link" data-nav-link>Market </Link>
          </li>
          <li class="navbar-item">
            <Link to ="/About" class="navbar-link" data-nav-link> About </Link>
          </li>
          <li class="navbar-item">
            <Link to ="/Contact" class="navbar-link" data-nav-link>Contact Us </Link>
          </li>
          <li class="navbar-item">
            <Link to="/Wallet"  class="navbar-link" data-nav-link>Wallet </Link>
          </li>
          <li class="navbar-item">
            <Link to ="/Login" class="navbar-link" data-nav-link> Log in</Link>
          </li>
    
        </ul>
      </nav>
    </div>
  </header>

    </>      

    );
}
export default Header;