import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="productCard">
        <div className="imgHolder">
          <picture>
            <source
              srcSet="/src/assets/image-product-desktop.jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/src/assets/image-product-mobile.jpg"
              media="(max-width: 767px)"
            />
            <img src="/src/assets/image-product-destop.jpg" alt="image" />
          </picture>
        </div>

        <div className="details">
          <p className="perfume">perfume</p>

          <h3 className="">Gabrielle Essence Eau De Parfum</h3>

          <p className="desc">
            {" "}
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="price">
            <p className="newPrice">$149.99</p>
            <p className="initPrice">$169.99</p>
          </div>

          <div className="button">
            <p className=""> Add to Cart</p>
          </div>
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://jekon-dev.netlify.app/">Jekon</a>.
      </div>
    </div>
  );
}

export default App;
