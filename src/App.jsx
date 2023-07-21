import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Products from './components/Products';
import Header from './components/Header';
import Navbar from './components/Navbar';
import _404 from './components/_404';

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

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} searchQuery={searchQuery} />
      <Header onSort={handleSort} itemCount={productsCount}/>
      <Router>
        <Routes>
          <Route path="/" element={<Products category="All" products={products} setProducts={setProducts} searchQuery={searchQuery} sortOption={sortOption} updateProductsCount={updateProductsCount} />} />
          <Route path="/men's clothing/" element={<Products category="men's clothing" searchQuery={searchQuery} sortOption={sortOption} updateProductsCount={updateProductsCount} />} />
          <Route path="/women's clothing/" element={<Products category="women's clothing" searchQuery={searchQuery} sortOption={sortOption} updateProductsCount={updateProductsCount} />} />
          <Route path="/electronics/" element={<Products category="electronics" searchQuery={searchQuery} sortOption={sortOption} updateProductsCount={updateProductsCount} />} />
          <Route path="/jewelery/" element={<Products category="jewelery" searchQuery={searchQuery} sortOption={sortOption} updateProductsCount={updateProductsCount} />} />
          <Route path="*" element={<_404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;