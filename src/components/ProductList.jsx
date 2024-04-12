import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    // State to store Products fetched from API
    const [products, setProducts] = useState([]);

    // Function to fetch Products from API
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/');
            if (!response.ok) {
                throw new Error('Failed to fetch Products');
            }
            const data = await response.json();
            setProducts(data); // Update state with the array of Products
        } catch (error) {
            console.error('Error fetching Products:', error);
            setProducts([]); // Set Products to an empty array in case of error
        }
    };
    
    // useEffect to fetch Products from API when component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products); // Log the Products state

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                products.map((product) => (
                    <div key={product.id} className='border p-4'>
                        <h3 className='text-xl font-bold'>{product.title}</h3>
                        <p className='italic text-lg font-mono'>£{product.price}</p>
                        <p>{product.category}</p>
                        <img src={product.image} alt={product.title} style={{width: 200, height: 200}} /> 
                           {/* Link component to direct to dynamic path and pass Product data as state */}
                        <Link to={`/products/${product.id}`} state={product}>
                            <button className="font-serif text-center bg-red-500 mt-4 text-gray-100 hover:text-gray-300 border border-gray-300 rounded-lg">View Product</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductList;
