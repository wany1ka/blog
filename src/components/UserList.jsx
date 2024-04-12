import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    // State to store users fetched from API
    const [users, setUsers] = useState([]);

    // Function to fetch users from API
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data.users); // Update state with the array of users
        } catch (error) {
            console.error('Error fetching users:', error);
            setUsers([]); // Set users to an empty array in case of error
        }
    };
    

    // useEffect to fetch users from API when component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    console.log(users); // Log the users state

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                users.map((user) => (
                    <div key={user.id} className='border p-4'>
                        <h3 className='text-lg font-semibold'>{user.firstName} {user.lastName}</h3>
                        {/* Link component to direct to dynamic path and pass user data as state */}
                        <Link to={`/users/${user.id}`} state={user}>
                            <button>View User</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default UserList;