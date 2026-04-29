import Listing from './Listing';
import products from '../data/products';

function LaptopListing({ cart, addToCart, updateQuantity }) {
  const laptopProducts = products.filter(p => p.category === 'laptop');
  
  return (
    <Listing
      products={laptopProducts}
      cart={cart}
      addToCart={addToCart}
      updateQuantity={updateQuantity}
    />
  );
}

export default LaptopListing;