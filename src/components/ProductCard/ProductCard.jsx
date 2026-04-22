import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  
  const hasMultipleImages = product.images.length > 1;
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  const addToCart = () => {
    setCartQuantity(1);
  };
  
  const incrementCart = () => {
    setCartQuantity(prev => prev + 1);
  };
  
  const decrementCart = () => {
    if (cartQuantity === 1) {
      setCartQuantity(0);
    } else {
      setCartQuantity(prev => prev - 1);
    }
  };
  
  return (
    <div className="product-card">
      <div className="image-container">
        <img 
          src={product.images[currentImageIndex]} 
          alt={product.model}
          className="product-image"
        />
        
        {hasMultipleImages && (
          <>
            <button className="nav-btn prev-btn" onClick={prevImage}><img src="./icons/left.svg" alt="" /></button>
            <button className="nav-btn next-btn" onClick={nextImage}><img src="./icons/right.svg" alt="" /></button>
            <div className="image-counter">
              {currentImageIndex + 1} / {product.images.length}
            </div>
          </>
        )}
      </div>
      
      {product.isSpecialOffer && (
        <div className="special-offer-badge">Special Offer</div>
      )}
      
      <div className="product-info">
        <div className="product-make">{product.make}</div>
        <div className="product-model">{product.model}</div>
        <div className="product-price">${product.price.toLocaleString('en-US')}</div>
        
        <div className="product-actions">
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={toggleFavorite}
          >
            <svg className='favorite-btn__img' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0001 8.00001C12.9934 7.02667 14.0001 5.86001 14.0001 4.33334C14.0001 3.36088 13.6138 2.42825 12.9261 1.74061C12.2385 1.05298 11.3059 0.666672 10.3334 0.666672C9.16008 0.666672 8.33341 1.00001 7.33341 2.00001C6.33341 1.00001 5.50675 0.666672 4.33341 0.666672C3.36095 0.666672 2.42832 1.05298 1.74069 1.74061C1.05306 2.42825 0.666748 3.36088 0.666748 4.33334C0.666748 5.86667 1.66675 7.03334 2.66675 8.00001L7.33341 12.6667L12.0001 8.00001Z" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {cartQuantity === 0 ? (
            <button className="add-to-cart-btn" onClick={addToCart}>
              Add to Cart
            </button>
          ) : (
            <div className="cart-controls">
              <button className="cart-control__btn-minus" onClick={decrementCart}>−</button>
              <span className="cart-quantity">{cartQuantity} in cart</span>
              <button className="cart-control__btn-plus" onClick={incrementCart}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;