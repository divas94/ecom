import React from 'react';
 
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
export default function App (){
    return (
        <BrowserRouter>
        <div className = "grid-container">
            <header className = "row">
                <div>
                    <a className = "brand" href = "/">
                        amazona
                    </a>
                </div>
                <div>
                    <a href = "/cart">
                        cart
                    </a>
                    <a href ="/signin">
                        sign In
                    </a>
                </div>
            </header>
            <main>
                <Routes>
                    
                    <Route path = "/products" element ={<ProductScreen />}>
                        <Route path=":id" element = {<ProductScreen/>}></Route>
                        </Route>  
                    <Route path ="/"   element = {<HomeScreen/>}exact />   
                
                </Routes>
               
            </main>
            <footer className='row center'>all right reserved</footer>
        </div>
        </BrowserRouter>
        
    )
}