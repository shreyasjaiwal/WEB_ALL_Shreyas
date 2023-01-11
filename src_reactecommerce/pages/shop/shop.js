import React from 'react'
import { PRODUCTS } from "../../Product"
import Product from './Product'
import './shop.css'
const Shop = () => {
    return (
        <div>
            <div className='shop'>
                <div className='shopTitle'>
                    <h1> Pedro Tech Products</h1>
                </div>
                <div className='products'>
                    {PRODUCTS.map((product) =><Product data={product} />)}
                </div>
            </div>
        </div>
    )
}

export default Shop;
