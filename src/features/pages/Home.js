import React from 'react'
import Navbar from '../navbar/Navbar'
import Product from '../product-list/components/ProductList'

const Home = () => {
    return (
        <div>
            <Navbar>
                <Product></Product>
            </Navbar>
        </div>
    )
}

export default Home
