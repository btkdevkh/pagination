import './App.css';
import { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datas = await res.json();

    setPosts(datas);
    setLoading(false);
  }

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mt-3">
      <Posts 
        posts={currentPosts} 
        loading={loading}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
