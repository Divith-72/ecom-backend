import React from 'react';
import Cart from './Cart.jsx'
const ProductData = ({ products, onEdit, onDelete, loading }) => {
    if (loading) {
        return (
            <div >
                <p>Loading products...</p>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div >
                <h3>No Products Found</h3>
                <p>Start by adding your first product!</p>
            </div>
        );
    }

    return (
        <div>
            {products.map((product) => (
                <Cart
                    key={product._id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default ProductData;
