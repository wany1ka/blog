import { useLocation } from 'react-router-dom';

const User = () => {
    // Access the user data passed through state
    const { state: User } = useLocation();

    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-2x1 font-bold mb-2'>User Details</h1>
            <p className='text-gray-700'><strong>ID:</strong> {User.id}</p>
            <p className='text-gray-700'><strong>First Name:</strong> {User.firstName}</p>
            <p className='text-gray-700'><strong>Last Name:</strong> {User.lastName}</p>
            <p className='text-gray-700'><strong>Maiden Name:</strong> {User.maidenName}</p>
            <p className='text-gray-700'><strong>Age:</strong> {User.age}</p>
            {/* Add more user details here */}
        </div>
    );
};

export default User;