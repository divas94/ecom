import React from 'react'
import Rating from './Rating';
export default function Product(props) {
    let {product} = props;
  return (
    
        <div key =  {product._id }className="card">
                                <a href={`/products/${product._id}`}>
                                    <img className="medium" src = {product.image} alt="product"/>

                                </a>
                                <div className="card-body">
                                    <a href={`/products/${product._id}`}>
                                    <h2 >{product.name}</h2>
                                    </a>
                                   <Rating rating = {product.rating} numReviews = {product.numReviews}/>
                                    <div className='price'>rs {product.price}</div>
                                </div>
                                </div>
     
  )
}
