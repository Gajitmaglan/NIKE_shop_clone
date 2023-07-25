import React, { useState, useEffect } from 'react'
import FavoriteCard from './FavoriteCard'
import "./Favourites.css"

const Favourites = () => {
    const [favProducts, setFavProducts] = useState([]);
    const [favProductIds, setFavProductIds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
      console.log("liked products", likedProducts)
      setFavProductIds(likedProducts);
    }, []);
  
    useEffect(() => {
        setIsLoading(true)
      const fetchFavProducts = async () => {
        if (favProductIds.length === 0) {
            setIsLoading(false);
            return console.log("favProducts empty");
        }
        
        const favProductsData = await Promise.all(
          favProductIds.map(async (productId) => {
              const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
              const data = await response.json();
            return data;
          })
        );
  
        setFavProducts(favProductsData);
        setIsLoading(false);
      };
  
      fetchFavProducts();
    }, [favProductIds]);

    const onRemoveFav = (productId) => {
        const updatedFavProducts = favProducts.filter((product) => product.id !== productId);
        setFavProducts(updatedFavProducts);

        let likedProductsFromLocalStorage = JSON.parse(localStorage.getItem('likedProducts')) || [];
        const updatedLikedProducts = likedProductsFromLocalStorage.filter((localeId) => localeId !== productId);
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
    } 

  return (
    <div className='fav-cards'>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : favProducts.length > 0 ? (
        favProducts.map((product, index) => <FavoriteCard key={index} product={product} onRemoveFav={onRemoveFav} />)
      ) : (
        <h1>No products in favorites</h1>
      )}
    </div>
  )
}

export default Favourites