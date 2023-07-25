import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Products from './components/Products';
import Header from './components/Header';
import Navbar from './components/Navbar';
import _404 from './components/_404';
import FavoriteCard from './components/FavoriteCard';
import Favourites from './components/Favourites';

function App() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsCount, setProductsCount] = useState(0);

  const handleSort = (option) => {
    setSortOption(option);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const updateProductsCount = (count) => {
    setProductsCount(count);
  }

  console.log("App rendered");
  
// https://nike-shop-three.vercel.app

  return (
    <div className="App">
      <Router basename="/">
      <Navbar onSearch={handleSearch} searchQuery={searchQuery} />
      <Header onSort={handleSort} itemCount={productsCount}/>
        <Routes>
          <Route path="/" element={<Products category="All" products={products} setProducts={setProducts} searchQuery={searchQuery} sortOption={sortOption} updateProductsCount={updateProductsCount} />} />
          <Route path="/mens-clothing" element={<Products category="men's clothing" searchQuery={searchQuery} sortOption={sortOption} updateProductsCount={updateProductsCount} />} />
          <Route path="/womens-clothing" element={<Products category="women's clothing" searchQuery={searchQuery} sortOption={sortOption} updateProductsCount={updateProductsCount} />} />
          <Route path="/electronics" element={<Products category="electronics" searchQuery={searchQuery} sortOption={sortOption} updateProductsCount={updateProductsCount} />} />
          <Route path="/jewelery" element={<Products category="jewelery" searchQuery={searchQuery} sortOption={sortOption} updateProductsCount={updateProductsCount} />} />
          <Route path="*" element={<_404 />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
