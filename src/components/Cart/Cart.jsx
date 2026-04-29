import products from '../../data/products';
import './Cart.css';

function Cart({ cart, removeFromCart, updateQuantity, setPageType }) {
  const cartItems = Object.entries(cart).map(([id, quantity]) => {
    const product = products.find(p => p.id === Number(id));
    return { ...product, quantity };
  }).filter(item => item.id);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <div className="cart-container">
        <h1>Shopping Cart</h1>  {/* ← Заголовок всегда виден */}
        
        {cartItems.length === 0 ? (
          <div className="cart-empty-state">
            <p>Your cart is empty</p>
            <button className="continue-shopping-btn" onClick={() => setPageType('tv')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
        
              
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-product">
                    <img src={item.images[0]} alt={item.model} className="cart-item-image" />
                    <div className="cart-item-info">
                      <div className="cart-item-make">{item.make}</div>
                      <div className="cart-item-model">{item.model}</div>
                    </div>
                  </div>
                  
                  <div className="cart-item-price">
                    ${item.price.toLocaleString('en-US')}
                  </div>
                  
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button className='cart-item-quantity__add' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  
                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toLocaleString('en-US')}
                  </div>
                  
                  <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                    🗑️
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
              
              <button className="back-shopping-btn" onClick={() => setPageType('tv')}>
               Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;