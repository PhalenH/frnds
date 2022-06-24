import React, { useState, useEffect } from "react";
import axios from "axios";
import { Posts } from "../../components/Posts";
import { Pagination } from "../../components/Pagination";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setcurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h1 className="text-white mb-3">Testing Pagination</h1>
      <Posts posts={currentPost} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} />
    </div>
  );
}
