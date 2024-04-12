import { useLocation } from 'react-router-dom';
const Blog = () => {
  const { state: item }= useLocation();
 return (
  <div className='max-w-md mx-auto bg-white shadow-lg rounded-xlg overflow-hidden'>
  <h1 className="font-bold text-center text-rose-700 "> Blog Details</h1>
  <ul>
    <li>
        <p><strong>Title:</strong><br />{item.title}</p>
        <p><strong>By:</strong>{item.author}</p>
        <p><strong>Written on:</strong> {item.date}</p>
        <p><strong>Description</strong><br />{item.description}</p>
      </li>
  </ul>
</div>
  )
};
export default Blog;