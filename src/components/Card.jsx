import {React} from 'react';
import LikedSVG from './LikedSVG';

const Card = ({id, title, image, price}) => {
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
              <button style={{height: "calc(1.8rem)", fontSize: "1em", padding: "0.2rem", marginLeft: "10px"}}>
                <LikedSVG />
              </button>
            </div>
        </div>
    </div>
  )
}

export default Card