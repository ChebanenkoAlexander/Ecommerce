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
            <button className="nav-btn prev-btn" onClick={prevImage}>❮</button>
            <button className="nav-btn next-btn" onClick={nextImage}>❯</button>
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
            <img className='favorite-btn__img' src="./icons/vector.svg" alt="" />
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