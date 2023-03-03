import React from 'react';
import Cloth from '../assets/cloth.jpeg';
import Cf from "../assets/cloth-factory.jpeg";
import Cf2 from "../assets/cloth-factory2.jpeg";
import Fabric from "../assets/fabric.jpeg";

export default function AboutUs() {
  return (
    <>
      <section style={{ backgroundImage: `url(${Cloth})` }} class="container container-img">
        <strong>
          <h2 class="info-text">About Clothing Market</h2>
        </strong>
      </section>
      <section class="container container4">
        <div class="ul-about1">
          <div class="flex-about1">
            <h2 class="bold">Together we are strong</h2>
          </div>
          <div class="flex-about1">
            <p class="bold">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <section class="ul-about2">
          <figure class="flex-about2">
            <img src={Cf} />
          </figure>
          <figure class="flex-about2">
            <img src={Cf2} />
          </figure>
          <figure class="flex-about2">
            <img src={Fabric} />
          </figure>
        </section>
      </section>
    </>
  );
}
