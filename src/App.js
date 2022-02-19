import React from 'react';
import data from './data';
import Product from './components/Product'; 

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
                                    <Product key={product._id} product = {product}/>
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