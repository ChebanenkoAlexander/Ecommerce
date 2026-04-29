import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductSort from "../components/ProductSort/ProductSort";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Listing.css";
function Listing({ products, cart, addToCart, updateQuantity }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState("price-asc");

  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("5000");

  const [tempBrand, setTempBrand] = useState("");
  const [tempMinPrice, setTempMinPrice] = useState("");
  const [tempMaxPrice, setTempMaxPrice] = useState("5000");

  useEffect(() => {
    setSelectedBrand("");
    setMinPrice("");
    setMaxPrice("5000");
    setTempBrand("");
    setTempMinPrice("");
    setTempMaxPrice("5000");
    setSortBy("price-asc");
  }, [products]);

  const applyFilters = () => {
    setSelectedBrand(tempBrand);
    setMinPrice(tempMinPrice);
    setMaxPrice(tempMaxPrice);
  };

  useEffect(() => {
    let result = [...products];

    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;
    result = result.filter((p) => p.price >= min && p.price <= max);

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [products, selectedBrand, minPrice, maxPrice, sortBy]);

  const brands = [...new Set(products.map((p) => p.brand))];

  return (
    
    <main className="main-content">
      <div className="content-container">
        <Sidebar
          brands={brands}
          selectedBrand={tempBrand}
          setSelectedBrand={setTempBrand}
          minPrice={tempMinPrice}
          setMinPrice={setTempMinPrice}
          maxPrice={tempMaxPrice}
          setMaxPrice={setTempMaxPrice}
          applyFilters={applyFilters}
        />
        <div className="products-area">
          <ProductSort
            productCount={filteredProducts.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cartQuantity={cart[product.id] || 0}
                addToCart={addToCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Listing;
