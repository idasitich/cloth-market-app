import React from 'react'; 
import Cloth from '../assets/cloth.jpeg';
import Bloods from '../assets/bloods.jpeg';
import Tshirt from '../assets/t-shirt.jpeg';
import Shoes from '../assets/shoes.jpeg';
import Bag from '../assets/bag.jpeg';


export default function Home() {
  return (
    <>
    <section class="container container1">
        <div class="flex-banner">
          <div class="item-banner1">
            <h1 class="main-text extra-bold">
              Make Your Own Style and Confident
            </h1>
            <p class="second-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="main-button">Sign up</button>
          </div>
          <figure class="item-banner2 ">
            <img src={Cloth} alt="cloth market"/>
          </figure>
        </div>
      </section>
      <section class="container container2">
        <h2 class="info-text extra-bold">On Sale</h2>
        <div class="flex-sale">
          <figure class="box">
            <img class="box-img" src={Bloods} alt="bloods tshirt"/>
            <figcaption>
              <div class="text">
                T-Shirt<strong>"Bloods"</strong> Unisex
              </div>
              <div class="text bold">$10</div>
            </figcaption>
          </figure>
          <figure class="box">
            <img class="box-img" src={Tshirt} alt="casual shirt"/>
            <figcaption>
              <div class="text">Casual T-Shirt Man</div>
              <div class="text bold">$15</div>
            </figcaption>
          </figure>
          <figure class="box">
            <img class="box-img" src={Shoes} alt="sneakers"/>
            <figcaption>
              <div class="text">Purple Sneaker Unisex</div>
              <div class="text bold">$30</div>
            </figcaption>
          </figure>
          <figure class="box">
            <img class="box-img" src={Bag} alt="bag unisex"/>
            <figcaption>
              <div class="text">Body Bag Man</div>
              <div class="text bold">$25</div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section class="container container3">
        <blockquote>
          <span class="quote-text italic">
            "Don't be into trends. Don't make fashion own you, but you decide
            what you are, what you want to express by the way you dress and the
            way you live."
          </span>
          <span class="name bold">- Gianni Versace</span>
        </blockquote>
      </section>
      <section class="container container4">
        <div class="blue-box">
          <div class="box2">
            <strong>
              <p class="bold">Its time to show your style!</p>
            </strong>
            <p>
              Sign up for our product by clicking that button right over there!
            </p>
          </div>
          <div class="box2">
            <button class="second-button">Sign up</button>
          </div>
        </div>
      </section>
    </>
  );
}
