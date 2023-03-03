import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutus';
import Man from './pages/man';
import './style.css';

export default function App() {
  return (
    <>
    <header class="container header flex-header">
      <nav>
          <div class="logo">
            <strong>
              <p>Clothing Market</p>
            </strong>
          </div>
          <div class="navbar">
            <ul class="second-text">
              <li class="item-nav">
                <Link to="cloth-market-app">Home</Link>
              </li>
              <li class="item-nav">
                <Link to="AboutUs">About Us </Link>
              </li>
              <li class="item-nav">
                <Link to="Man">Man </Link>
              </li>
            </ul>
          </div>
      </nav>
      </header>
      <main>
        <Routes>
          <Route path='cloth-market-app' element = {<Home />}/>
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="man" element={<Man />} />
        </Routes>
      </main>
      <footer class="container footer flex-foot">
        <section class="foot">
          <h2 class="bold">Help & Information</h2>
          <ul>
            <a href="">
              <li>Help</li>
            </a>
            <a href="">
              <li>Track order</li>
            </a>
            <a href="">
              <li>Delivery & returns</li>
            </a>
            <a href="">
              <li>Sitemap</li>
            </a>
          </ul>
        </section>
        <section class="foot">
          <strong>
            <h2 class="bold">About Clothing Market</h2>
          </strong>
          <ul>
            <a href="">
              <li>About us</li>
            </a>
            <a href="">
              <li>Career at Clothing Market</li>
            </a>
            <a href="">
              <li>Coorporate Responsibility</li>
            </a>
            <a href="">
              <li>Investors'site</li>
            </a>
          </ul>
        </section>
        <section class="foot">
          <h2 class="bold">Follow Us</h2>
          <ul>
            <a href="">
              <li class="inline">
                <i class="fa fa-facebook"></i>
              </li>
            </a>
            <a href="">
              <li class="inline">
                <i class="fa fa-instagram"></i>
              </li>
            </a>
            <a href="">
              <li class="inline">
                <i class="fa fa-twitter"></i>
              </li>
            </a>
            <a href="">
              <li class="inline">
                <i class="fa fa-youtube"></i>
              </li>
            </a>
          </ul>
          <h2 class="bold">Address:</h2>
          <p>Jakarta - Indonesia</p>
        </section>
      </footer>
    </>
  );
}
