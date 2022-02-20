import React from 'react'
import Rating from '../components/Rating'
import data from '../data'
import { useParams } from 'react-router-dom'

export default function ProductScreen (props) {
     
    let params =useParams();

    const product = data.products.find((product) => product._id === params.id)
    
    if(!product){
        return <div >product not found</div>
    }
  return (
    <div className='row top'>
        <div className='col-2'>
            <img className='large' src={product.image} alt = {product.name}/> 
        </div>
        <div className='col-1'>
            <ul>
               <li>
            <h1>{product.name}</h1>
            </li> 
            <li>
            <Rating rating={product.rating} numReviews = {product.numReviews}/>
            </li>
            <li> 
            <span>Price : {product.price}</span>
            </li> 
            <li>
                Description
            <p>{product.description}</p>
            </li> 
            </ul>
        </div>  
        <div className='col-1'>
            <div className='card card-body'>
                <ul>
                    <li>
                        <div className='row'>
                            <div>price</div>
                            <div className='price'>${product.price}</div>
                        </div>
                    </li>
                    <li>
                        <div className='row'>
                            <div>status</div>
                            <div>
                                {
                                    product.countInStock>0 ?(
                                        <span className='sucess'>In Stock</span>
                                    ):(
                                        <span className='error'>unavailable</span>
                                    )
                                }
                            </div>

                        </div>
                    </li>
                </ul>
            </div>
        </div>       
    </div>
  )
}
