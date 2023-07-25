import React from 'react'
import './FavouriteCard.css'

const FavoriteCard = ({product, onRemoveFav}) => {

    const removeItem = () => {
        onRemoveFav(product.id);
    }

  return (
    <div className="favcard">
        <div className="fav-img-box">
            <img src={product.image} alt={product.image} />
        </div>
        {/* <div className="span-two-columns"></div> */}
        <div className='fav-text'>
            <div className="fav-title">{product.title}</div>
            <div className='fav-add-to-cart'>
                <button>Add to Cart</button>
            </div>
        </div>
        <div className="price-and-delete" style={{margin: "auto"}}>
            <div className='fav-price'>${product.price.toFixed(2)}</div>
            <button onClick={removeItem} style={{height: "calc(1.8rem)", fontSize: "1em"}}>
                REMOVE
            </button>
        </div>
    </div>
  )
}

export default FavoriteCard