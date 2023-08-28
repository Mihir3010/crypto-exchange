import React from "react";
import hero from "../Component/CSS/hero.png";
import coin1 from "../Component/CSS/coin1.png";
import coin2 from "../Component/CSS/coin2.png";
import coin3 from "../Component/CSS/coin3.png";
import coin4 from "../Component/CSS/coin4.png";
import ina from "../Component/CSS/ina.png";
import inb from "../Component/CSS/inb.png";
import inc from "../Component/CSS/inc.png";
import ind from "../Component/CSS/ind.png";
import template from "../Component/CSS/template.png"

function Home(){
    return(
      <>
      <section class="section hero" aria-label="hero" data-section>
        <div class="container">
          <div class="hero-content">
            <h1 class="h1 hero-title">Buy & Sell Digital Assets In The Cryptex</h1>
            <p class="hero-text">
              Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
            </p>
            <p href="#" class="btn btn-primary">Get started now</p></div>
          <figure class="hero-banner">
            <img src={hero} width="570" height="408" alt="hero banner" class="w-100"/>
          </figure>
        </div>
      </section>



      <section class="section trend" aria-label="crypto trend" data-section>
        <div class="container">

          <div class="trend-tab">

            <ul class="tab-nav">

              <li>
                <button class="tab-btn active">Crypto</button>
              </li>

              <li>
                <button class="tab-btn">DeFi</button>
              </li>

              <li>
                <button class="tab-btn">BSC</button>
              </li>

              <li>
                <button class="tab-btn">NFT</button>
              </li>

              <li>
                <button class="tab-btn">Metaverse</button>
              </li>

              <li>
                <button class="tab-btn">Polkadot</button>
              </li>

              

              

             
            </ul>

            <ul class="tab-content">

              <li>
                <div class="trend-card">

                  <div class="card-title-wrapper">
                    <img src={coin1} width="24" height="24" alt="bitcoin logo"/>

                    <p href="#" class="card-title">
                      Bitcoin <span class="span">BTC/USD</span>
                    </p>
                  </div>

                  <data class="card-value" value="46168.95">USD 25,907.88</data>

                  <div class="card-analytics">
                    <data class="current-price" value="36641.20"> 25,880.00 </data>

                    <div class="badge red">-0.65%</div>
                  </div>

                </div>
              </li>

              <li>
                <div class="trend-card active">

                  <div class="card-title-wrapper">
                    <img src={coin2} width="24" height="24" alt="ethereum logo"/>

                    <p href="#" class="card-title">
                      Ethereum <span class="span">ETH/USD</span>
                    </p>
                  </div>

                  <data class="card-value" value="3480.04">USD 1,658.60</data>

                  <div class="card-analytics">
                    <data class="current-price" value="36641.20">1,738</data>

                    <div class="badge green">+0.60%</div>
                  </div>

                </div>
              </li>

              <li>
                <div class="trend-card">

                  <div class="card-title-wrapper">
                    <img src= {coin3} width="24" height="24" alt="tether logo"/>

                    <p href="#" class="card-title">
                      Tether <span class="span">USDT/USD</span>
                    </p>
                  </div>

                  <data class="card-value" value="1.00">USD 1.01</data>

                  <div class="card-analytics">
                    <data class="current-price" value="36641.20">0.9997</data>

                    <div class="badge red">-0.01%</div>
                  </div>

                </div>
              </li>

              <li>
                <div class="trend-card">

                  <div class="card-title-wrapper">
                    <img src= {coin4} width="24" height="24" alt="bnb logo"/>

                    <p href="#" class="card-title">
                      BNB <span class="span">BNB/USD</span>
                    </p>
                  </div>

                  <data class="card-value" value="443.56">USD 231.15</data>

                  <div class="card-analytics">
                    <data class="current-price" value="36641.20"> 215.65</data>

                    <div class="badge red">-2.24%</div>
                  </div>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>


      <section class="section instruction" aria-label="instruction" data-section>
        <div class="container">

          <h2 class="h2 section-title">How It Work</h2>

          <p class="section-text">
            Stacks is a production-ready library of stackable content blocks built in React Native.
          </p>

          <ul class="instruction-list">

            <li>
              <div class="instruction-card">

                <figure class="card-banner">
                  <img src= {ina} width="96" height="96" loading="lazy" alt="Step 1"
                    class="img"/>
                </figure>

                <p class="card-subtitle">Step 1</p>

                <h3 class="h3 card-title">Download</h3>

                <p class="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                </p>

              </div>
            </li>

            <li>
              <div class="instruction-card">

                <figure class="card-banner">
                  <img src= {inb} width="96" height="96" loading="lazy" alt="Step 2"
                    class="img"/>
                </figure>

                <p class="card-subtitle">Step 2</p>

                <h3 class="h3 card-title">Connect Wallet</h3>

                <p class="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                </p>

              </div>
            </li>

            <li>
              <div class="instruction-card">

                <figure class="card-banner">
                  <img src= {inc} width="96" height="96" loading="lazy" alt="Step 3"
                    class="img"/>
                </figure>

                <p class="card-subtitle">Step 3</p>

                <h3 class="h3 card-title">Start Trading</h3>

                <p class="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                </p>

              </div>
            </li>

            <li>
              <div class="instruction-card">

                <figure class="card-banner">
                  <img src={ind} width="96" height="96" loading="lazy" alt="Step 4"
                    class="img"/>
                </figure>

                <p class="card-subtitle">Step 4</p>

                <h3 class="h3 card-title">Earn Money</h3>

                <p class="card-text">
                 
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                </p>

              </div>
            </li>

          </ul>

        </div> 
      </section>   


      <section class="section about" aria-label="about" data-section>
        <div class="container">

          <figure class="about-banner">
            <img src= {template} width="758" height="456" loading="lazy" alt="about banner"
              class="w-100"/>
          </figure>

          <div class="about-content">

            <h2 class="h2 section-title">What Is Cryptex</h2>
             <p class="section-text">
              Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot
              Trade, Futures
              Trade, P2P, Staking, Mining, and margin.
            </p>

            <ul class="section-list">

              <li class="section-item">
                <div class="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <h3 class="h3 list-title">View real-time cryptocurrency prices</h3>
                </div>

                <p class="item-text">
                  Experience a variety of trading on Bitcost. You can use various types of coin transactions such as
                  Spot Trade, Futures
                  Trade, P2P, Staking, Mining, and margin.
                </p>
              </li>

              <li class="section-item">
                <div class="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <h3 class="h3 list-title">Buy and sell BTC, ETH, XRP, OKB, Etc...</h3>
                </div>

                <p class="item-text">
                  Experience a variety of trading on Bitcost. You can use various types of coin transactions such as
                  Spot Trade, Futures
                  Trade, P2P, Staking, Mining, and margin.
                </p>
              </li>

            </ul>
             <br/>
            <p href="#" class="btn btn-primary">Explore More</p>

          </div>

        </div>
      </section>



    </>

    );

}
export default Home;