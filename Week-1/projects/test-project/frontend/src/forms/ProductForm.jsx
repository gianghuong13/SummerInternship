import { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name: name,
            price: parseFloat(price)
        };

        if (onAddProduct) {
            onAddProduct(newProduct)
        }

        setName('')
        setPrice('')

    }

    return (
        <>
            <div>Form add product</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
                    </label>
                </div>
                
                <div>
                    <label>
                        Price:
                        <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)}/>
                    </label>
                </div>
                
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default ProductForm;