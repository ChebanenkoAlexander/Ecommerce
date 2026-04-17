import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import ProductCard from '../components/ProductCard/ProductCard';
// import ProductSort from '../components/ProductSort';
import { tvProducts } from '../data/products';
import './Home.css';

function Home() {
  // Получаем уникальные бренды для фильтра
  const brands = [...new Set(tvProducts.map(product => product.brand))];
  
  return (
    <div className="home">
        
      <Header />
      <main className="main-content">
        <div className="content-container">
          {/* <Sidebar brands={brands} /> */}
          <div className="products-area">
            {/* <ProductSort productCount={tvProducts.length} /> */}
            
            <div className="products-grid">
              {tvProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;