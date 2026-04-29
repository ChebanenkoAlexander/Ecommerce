import Listing from './Listing';
import products from '../data/products';

function PhoneListing({ cart, addToCart, updateQuantity }) {
  const phoneProducts = products.filter(p => p.category === 'phone');
  
  return (
    <Listing
      products={phoneProducts}
      cart={cart}
      addToCart={addToCart}
      updateQuantity={updateQuantity}
    />
  );
}

export default PhoneListing;