import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    let [product,setProduct] = useState([]);
    
    return (
        <div>
            <ProductForm setProduct={setProduct} product={product}></ProductForm>
            <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default ProductManagement;