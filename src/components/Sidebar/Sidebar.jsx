import React from 'react';
import './Sidebar.css';

function Sidebar({ brands }) {
  return (
    <aside className="sidebar">
        <div className="filter-container">
            <h2>Filters</h2>
            <div className="filter-section">
                <h3>Brand</h3>
                <select className="brand-select">
                <option value="">All Brands</option>
                {brands.map((brand, index) => (
                    <option key={index} value={brand}>{brand}</option>
                ))}
                </select>
            </div>
            
            <div className="filter-section">
                <h3>Price Range</h3>
                <div className="price-inputs">
                    <input type="text" placeholder="0" className="price-input" />
                    <input type="text" placeholder="5000" className="price-input" />
                </div>
            </div>
            
            <button className="apply-filters-btn">Apply Filters</button>
        </div>

      
      <div className="special-deal-banner">
        <h3><img src="./icons/clock.svg" alt="" /> Special Deal!</h3>
        <p className='special-deal-banner__text'>Register now to unlock exclusive offers and discounts</p>
        <p>Offer expires in: <span className="timer">0:53:50</span></p>
        <img className='special-deal-banner__close' src="./icons/close.svg" alt="" />
      </div>
    </aside>
  );
}

export default Sidebar;