import React from 'react'

const ProductsList = () => {
    const products = [
        {name: 'shoes', price: 100},
        {name: 'shirt', price: 100},
        {name: 'pants', price: 100}
    ]
  return (
    <>
        <div>ProductsList</div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {products.map((p, idx) => (
                <div key={idx} style={{border: '1px solid #ccc', padding: '12px', width: '150px'}}>
                    <h4>{p.name}</h4>
                    <p>Price: ${p.price}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default ProductsList