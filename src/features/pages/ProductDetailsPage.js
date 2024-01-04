import React from 'react'
import ProductDetails from '../product-list/components/ProductDetails'
import Navbar from '../navbar/Navbar'

const ProductDetailsPage = () => {
    return (
        <div>
            <Navbar>
                <ProductDetails></ProductDetails>
            </Navbar>

        </div>
    )
}

export default ProductDetailsPage
