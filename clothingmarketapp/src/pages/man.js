import React from 'react';
import Cloth from '../assets/cloth.jpeg';
import Fullbody from '../assets/fullbody.png';
import Ransel from '../assets/ransel.png';
import Sneaker from "../assets/sneaker.png";
import Wallets from "../assets/wallets.png";
import Belts from "../assets/belts.png" ;
import Watches from "../assets/watches.png";
import Jewel from "../assets/jewel.png";
import Eye from "../assets/eyeglasses.png";


export default function Man() {
  return (
    <>
      <section style={{ backgroundImage: `url(${Cloth})` }} class="container container-img">
        <h2 class="info-text bold">MEN</h2>
      </section>
      <section class="container container4">
        <div class="flex-men">
            <figure class="flex-men1 men-hover">
              <img class="flex-men-img1" src={Fullbody} />
              <figcaption>Ready to wear</figcaption>
              <a href="">
                SHOP ALL <i class="fa-solid fa-angles-right"></i>
              </a>
            </figure>
          <figure class="flex-men1">
            <section class="flex-inside-men">
              <a href="">
                <figure class="men-hover">
                  <img class="flex-men-img2" src={Ransel} />
                  <figcaption>Bags</figcaption>
                  <a href="">
                    SHOP ALL <i class="fa-solid fa-angles-right"></i>
                  </a>
                </figure>
              </a>
              <a href="">
                <figure class="men-hover">
                  <img class="flex-men-img2" src={Sneaker} />
                  <figcaption>Shoes</figcaption>
                  <a href="">
                    SHOP ALL <i class="fa-solid fa-angles-right"></i>
                  </a>
                </figure>
              </a>
            </section>
          </figure>
            <figure class="flex-men1 men-hover">
              <img class="flex-men-img3" src={Wallets} />
              <figcaption>Wallets</figcaption>
              <a href="">
                SHOP ALL <i class="fa-solid fa-angles-right"></i>
              </a>
            </figure>
            <figure class="flex-men1 men-hover">
              <img class="flex-men-img3" src={Belts}/>
              <figcaption>Belts</figcaption>
              <a href="">
                SHOP ALL <i class="fa-solid fa-angles-right"></i>
              </a>
            </figure>
            <figure class="flex-men2 men-hover">
              <img class="flex-men-img4" src={Watches} />
              <figcaption>Watches</figcaption>
              <a href="">
                SHOP ALL <i class="fa-solid fa-angles-right"></i>
              </a>
            </figure>
            <figure class="flex-men2 men-hover">
              <img class="flex-men-img4" src={Jewel} />
              <figcaption>Jewellery</figcaption>
              <a href="">
                SHOP ALL <i class="fa-solid fa-angles-right"></i>
              </a>
            </figure>
            <figure class="flex-men2 men-hover">
              <img class="flex-men-img4" src={Eye} />
              <figcaption>Eyewear</figcaption>
              <a href="">
                SHOP ALL <i class="fa-solid fa-angles-right"></i>
              </a>
            </figure>
        </div>
      </section>
    </>
  );
}
