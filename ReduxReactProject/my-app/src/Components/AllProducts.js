import React from 'react'
import { FAKE_DATA } from '../FakeData'
import Product from './Product'
import './AllProducts.css'

const AllProducts = () => {
  return (
    <div className='allProducts'>
    {FAKE_DATA.map((product)=>{
        return <Product title={product.title} src={product.src} description={product.description} price={product.price}/>
    })}
    </div>
  )
}

export default AllProducts
