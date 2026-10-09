
import { useEffect, useState } from 'react';
import './App.css';

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Amazon Product Store</h1>
    </header>
  );
}

// ProductCard Component
function ProductCard({
  productName,
  price,
  quantity,
  setQuantity,
  selectedColor,
  setSelectedColor,
  deliveryCity,
  setDeliveryCity
}) {
  // Lifecycle: update browser title
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    // Cleanup: restore previous title
    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft-Wireless-Mobile-Mouse-4000-0.jpg"
            alt="Wireless Mouse"
/>
 
        </div>

        <div className="product-details">
          <h2>{productName}</h2>

          <p className="price">
            <strong>₹{price}</strong>
            <span> per item</span>
          </p>

          <p>Colour: {selectedColor}</p>
          <p>Deliver to: {deliveryCity}</p>

          <hr />

          <p>Cart Quantity: {quantity}</p>

          <p className="total">
            Total Amount: ₹{quantity * price}
          </p>

          <p className="status">
            {quantity === 0
              ? 'Cart is empty'
              : 'Product added to cart'}
          </p>
        </div>
      </div>

      <div className="controls">
        <div>
          <label htmlFor="color">Product colour</label>
          <select
            id="color"
            value={selectedColor}
            onChange={(event) =>
              setSelectedColor(event.target.value)
            }
          >
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
          </select>
        </div>

        <div>
          <label htmlFor="city">Delivery city</label>
          <input
            id="city"
            type="text"
            value={deliveryCity}
            onChange={(event) =>
              setDeliveryCity(event.target.value)
            }
          />
        </div>
      </div>

      <div className="button-group">
        <button
          className="add-button"
          onClick={() => setQuantity(quantity + 1)}
        >
          Add to Cart
        </button>

        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity === 0}
        >
          Remove One
        </button>

        <button onClick={() => setQuantity(0)}>
          Reset Cart
        </button>
      </div>
    </>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      © 2026 Amazon Product Store
    </footer>
  );
}

// Main App Component
function App() {
  // Product details
  const productName = 'Wireless Mouse';
  const price = 499;

  // State variables
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [deliveryCity, setDeliveryCity] = useState('Coimbatore');
  const [showProduct, setShowProduct] = useState(true);

  return (
    <div className="container">
      <Header />

      <main>
        <button
          className="toggle-button"
          onClick={() => setShowProduct(!showProduct)}
        >
          {showProduct ? 'Hide Product' : 'Show Product'}
        </button>

        {showProduct && (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            setQuantity={setQuantity}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            deliveryCity={deliveryCity}
            setDeliveryCity={setDeliveryCity}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;