import { useLocation } from 'react-router-dom';

const Product = () => {
    // Access the Product data passed through state
    const { state: Product } = useLocation();

    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-2x1 font-bold mb-2'>Product Details</h1>
            <p className='text-gray-700'><strong>Title:</strong> {Product.title}</p>
            <p className='text-gray-700'><strong>Price:</strong> £{Product.price}</p>
            <p className='text-gray-700'><strong>Description:</strong> {Product.description}</p>
            <p className='text-gray-700'><img src={Product.image} alt={Product.id} style={{width: 300, height: 300}} /></p>
            {/* Add more Product details here */}
        </div>
    );
};

export default Product;