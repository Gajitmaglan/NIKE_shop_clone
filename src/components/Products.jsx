import React, { useEffect, useState } from 'react';
import Card from './Card';

const Products = ({ category, sortOption, searchQuery, updateProductsCount }) => {
  const [sortedFilteredProducts, setSortedFilteredProducts] = useState([]);
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    // Get liked products from localStorage at component mount
    const likedProductsFromLocalStorage = JSON.parse(localStorage.getItem('likedProducts')) || [];
    setLikedProducts(likedProductsFromLocalStorage);
  
    // Fetch products here or do any other initialization logic
    fetchProducts();
  }, []);

  const handleLike = (productId) => {
    console.log(localStorage.likedProducts)
    if (!likedProducts.includes(productId)) {
      const updatedLikedProducts = [...likedProducts, productId];
      setLikedProducts(updatedLikedProducts);
  
      localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      let url;
      if (category === 'All') {
        url = "https://fakestoreapi.com/products/";
      } else {
        switch (category) {
          case "electronics":
            category = "electronics";
            break;
          case "jewelery":
            category = "jewelery";
            break;
          case "womens-clothing":
            category = "women's clothing";
            break;
          case "mens-clothing":
            category = "men's clothing";
            break;
        }
        // CORS:
        // url = "https://cors-anywhere.herokuapp.com/https://fakestoreapi.com/products/category/" + category;
        url = "https://fakestoreapi.com/products/category/" + category;
      }
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false)
      setProducts(data);
    } catch (error) {
      setIsLoading(false)
      console.error(`Error fetching ${category} products:`, error);
    }
  };

  useEffect(() => {
    applySortAndFilter();
  }, [sortOption, searchQuery, products]);

  const applySortAndFilter = () => {
  let sortedFiltered = [...products]; // ~~~~~~~~~~~~~~~~!!!!

    if (searchQuery) {
      sortedFiltered = sortedFiltered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption) {
      switch (sortOption) {
        case 'priceHighLow':
          sortedFiltered.sort((a, b) => b.price - a.price);
          break;
        case 'priceLowHigh':
          sortedFiltered.sort((a, b) => a.price - b.price);
          break;
        case 'titleAtoZ':
          sortedFiltered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'titleZtoA':
          sortedFiltered.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          // No sorting option selected, do nothing
          break;
      }
    }

    setSortedFilteredProducts(sortedFiltered);
    updateProductsCount(sortedFiltered.length);
  };
  return (
    <div className="products">
      {isLoading ? (
        <h2 style={{ textAlign: 'center' }}>Loading...</h2>
      ) : (
        <>
          {sortedFilteredProducts.length > 0 ? (
            <div className="cards">
              {sortedFilteredProducts.map((product) => (
                <Card key={product.id} {...product} handleLike={handleLike} />
              ))}
            </div>
          ) : (
            <h2 style={{ textAlign: 'center' }}>No products found!</h2>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
