import { useState } from "react";
import ProductForm from "../forms/ProductForm";

const ProductsList = () => {
    const [products, setProducts] = useState([])

    return (
    <> 
        <ProductForm onAddProduct={(product) => setProducts([...products, product])} />
        
        {products.length === 0 ? (
            <p>No products available</p>
        ) : (
            <div>
                {products.map((p, idx) => (
                    <div key={idx} style={{border: '1px solid #ccc', padding: '12px', width: '150px'}}>
                        <h4>{p.name}</h4>
                        <p>Price: ${p.price}</p>
                    </div>
                ))}
            </div>
        )}
    </>
  )
}

export default ProductsList