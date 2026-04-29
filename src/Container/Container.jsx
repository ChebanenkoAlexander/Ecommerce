import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Content from '../components/Content/Content';
import "./Container.css";
const CART_STORAGE_KEY = "ecommerce_cart";

function Container() {
  const [pageType, setPageType] = useState("tv");
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : {};
  });
  useEffect(() => {
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
      console.log('🔥 Container.addToCart ВЫЗВАН! id:', productId);
  console.log('🔥 Текущая корзина:', cart);
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: quantity,
      }));
    }
  };

  const getCartCount = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };
  return (
    <div className="container">
      <Header
        pageType={pageType}
        setPageType={setPageType}
        cartCount={getCartCount()}
      />
      <Content
        pageType={pageType}
        setPageType={setPageType}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <Footer />
    </div>
  );
}

export default Container;
