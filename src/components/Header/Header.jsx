import React from "react";
import "./Header.css";

function Header({ pageType, setPageType, cartCount }) {
  const categories = [
    { id: "tv", label: "TV" },
    { id: "phone", label: "Phone" },
    { id: "laptop", label: "Laptop" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-categories">
          <a
            className="logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPageType("tv");
            }}
          >
            TechStore
          </a>
          
          {pageType !== 'cart' && categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${pageType === cat.id ? "active" : ""}`}
              onClick={() => setPageType(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        <div className="header-icons">
          <button className="icon-btn cart-icon" onClick={() => setPageType('cart')}>
            <img src="./icons/icon.png" alt="Cart" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button className="icon-btn user-icon">
            <img src="./icons/button.png" alt="User" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;