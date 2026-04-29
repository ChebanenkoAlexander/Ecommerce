import TvListing from '../../pages/TvListing';
import PhoneListing from '../../pages/PhoneListing';
import LaptopListing from '../../pages/LaptopListing';
import Cart from '../Cart/Cart';
import "./Content.css";
function Content({
  pageType,
  setPageType,
  cart,
  addToCart,
  removeFromCart,
  updateQuantity,
}) {
  return (
    <div className="content">
      {pageType === "tv" && (
        <TvListing
          cart={cart}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
        />
      )}
      {pageType === "phone" && (
        <PhoneListing
          cart={cart}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
        />
      )}
      {pageType === "laptop" && (
        <LaptopListing
          cart={cart}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
        />
      )}
      {pageType === "cart" && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          setPageType={setPageType}
        />
      )} 
    </div>
  );
}

export default Content;
