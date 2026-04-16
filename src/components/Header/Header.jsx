import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">      
        <nav className="nav-categories">
          <a className='logo' href="/tv">TechStore</a>
          <button className="category-btn active">TV</button>
          <button className="category-btn">Phone</button>
          <button className="category-btn">Laptop</button>
        </nav>
        <div className="header-icons">
            <button className="icon-btn cart-icon">  
                <img src="./icons/icon.png" alt="" />
            </button>
            
            <button className="icon-btn user-icon">
                <img src="./icons/button.png" alt="" />
            </button>
        </div>
      </div>
    </header>
  );
}

export default Header;