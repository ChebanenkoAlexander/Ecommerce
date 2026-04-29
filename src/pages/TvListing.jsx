import Listing from './Listing';
import products from '../data/products';

function TvListing({ cart, addToCart, updateQuantity }) {
  const tvProducts = products.filter(p => p.category === 'tv');
  
  return (
    <Listing
      products={tvProducts}
      cart={cart}
      addToCart={addToCart}
      updateQuantity={updateQuantity}
    />
  );
}

export default TvListing;