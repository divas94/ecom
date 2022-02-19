import React from 'react';
import data from './data';
 

export default function App (){
    return (
        <div className = "grid-container">
            <header className = "row">
                <div>
                    <a className = "brand" href = "index.html">
                        amazona
                    </a>
                </div>
                <div>
                    <a href = "cart.html">
                        cart
                    </a>
                    <a href ="signin.html">
                        sign In
                    </a>
                </div>
            </header>
            <main>
                <div>
                    <div className ="row center">
                        {
                            data.products.map (
                                (product)=>(
                                <div key =  {product._id }className="card">
                                <a href={`/products/${product._id}`}>
                                    <img className="medium" src = {product.image} alt="product"/>

                                </a>
                                <div className="card-body">
                                    <a href={`/products/${product._id}`}>
                                    <h2 >{product.name}</h2>
                                    </a>
                                    <div className = "rating">
                                        <span>
                                            
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <span>
                                            
                                            <i className="fa fa-star"></i>

                                        </span>
                                        <span>
                                            
                                            <i className="fa fa-star"></i>

                                        </span>
                                        <span>
                                            
                                            <i className="fa fa-star"></i>

                                        </span>
                                        <span>
                                            
                                            <i className="fa fa-star"></i>

                                        </span>
                                    </div>
                                    <div className='price'>rs {product.price}</div>
                                </div>
                                </div>
                                )
                            ) 
                        }
                        
                        
                        
                         

                    </div>
                </div>
            </main>
            <footer className='row center'>all right reserved</footer>
        </div>
    )
}