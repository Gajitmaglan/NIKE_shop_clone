import React, {useState, useEffect} from 'react';
import LikedSVG from './LikedSVG';

const Card = ({id, title, image, price, handleLike}) => {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    let likedProductsFromLocalStorage = JSON.parse(localStorage.getItem('likedProducts')) || [];
    if (likedProductsFromLocalStorage.includes(id)) {
      setIsLiked(true);
    }
  }, [])
  
  const handleLikeClick = () => {
    let likedProductsFromLocalStorage = JSON.parse(localStorage.getItem('likedProducts')) || [];
    if (likedProductsFromLocalStorage.includes(id)) {
      const updatedLikedProducts = likedProductsFromLocalStorage.filter((localeId) => localeId !== id);
      localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
      likedProductsFromLocalStorage = updatedLikedProducts;
    }
    setIsLiked((prevIsLiked) => !prevIsLiked);
    handleLike(id);
  };
  return (
    <div className="card" key={id}>
        <div className="image-box">
            <img src={image} alt={title} />
        </div>
        <div className="description">
            <h3 className="card-title">{title}</h3>
            <div>${price}</div>
            <div className="btns" style={{display: "flex", alignItems: "flex-start", justifyContent: "flex-start"}}>
              <button>Add to Cart</button>
              <button onClick={handleLikeClick} style={{height: "calc(1.8rem)", fontSize: "1em", padding: "0.2rem", marginLeft: "10px"}}>
                <LikedSVG fill={isLiked ? "red" : "white"} />
              </button>
            </div>
        </div>
    </div>
  )
}

export default Card