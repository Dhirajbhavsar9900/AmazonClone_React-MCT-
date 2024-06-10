import React, { useState, useEffect } from 'react';
import { fetchProducts } from './../../../api/api';

const Cards = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <section className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {products.map(product => (
                <div key={product.id} className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md'>
                    <span className='text-xs text-gray-500 px-3 py-2 block'>{product.category}</span>
                    <div className='w-full h-auto'>
                        <img className='w-full h-64 object-contain' src={product.image} alt={product.title} />
                    </div>
                    <div className='p-4'>
                        <h2 className='text-lg text-blue-900 font-semibold mb-1'>{product.title}</h2>
                        <p className='text-gray-800 font-semibold mb-2'>{`$${product.price}`}</p>
                        <p className='text-sm text-gray-600 truncate'>{product.description}</p>
                        <button className='bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg w-full mt-2'>Add To Cart</button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Cards;
