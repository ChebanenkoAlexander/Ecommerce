import React from 'react';
import './Sidebar.css';

function Sidebar({ brands }) {
  return (
    <aside className="sidebar">
        <div className="filter-container">
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
                <h3>Price</h3>
                <div className="price-inputs">
                <input type="number" placeholder="Min" className="price-input" />
                <span>-</span>
                <input type="number" placeholder="Max" className="price-input" />
                </div>
            </div>
            
            <button className="apply-filters-btn">Apply Filters</button>
        </div>

      
      <div className="special-deal-banner">
        <h3>🔥 Special Deal!</h3>
        <div className="timer">0:59:59</div>
        <p>Limited time offer!</p>
      </div>
    </aside>
  );
}

export default Sidebar;