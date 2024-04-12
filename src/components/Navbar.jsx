import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <li>
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <ul className="flex justify-center space-x-4">

                    <li>
                        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/users" className="text-white hover:text-gray-300">Users</Link>
                    </li>
                    <li>
                        <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;