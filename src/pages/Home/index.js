import React, { useState, useEffect } from "react";
import axios from "axios";
import { Posts } from "../Posts";

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

  console.log(posts);

  return (
    <div className="container mt-5">
      <h1 className="text-white mb-3">Testing Pagination</h1>
      <Posts posts={posts} loading={loading} />
    </div>
  );
}
