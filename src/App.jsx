import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UserList from "./components/UserList";
import User from "./components/User";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import ErrorPage from "./components/Error-page";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:itemId" element={<Blog />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    
  )
}

export default App