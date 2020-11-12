import React, { useEffect, useState } from "react";

import Posts from "../../components/Posts/Index";
import Header from "../../components/Header/Index";
import Skeleton from "../../components/Skeleton/Index";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./view.css";

interface Posts {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

function View() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    async function getPosts() {
      const res = await api.get("/view");
      console.log(res.data);
      setPosts(res.data);
      setIsLoading(false);
    }
    getPosts();
  }, []);

  if (isLoading) {
    return (
      <>
        <Header />
        <Skeleton />
      </>
    );
  }
  return (
    <div id="page-post">
      <div className="view-wrapper">
        <Header />

        <main className="grid-template">
          {!isLoading
            ? posts.map((post) => {
                return (
                  <Link key={post._id} to={`/view/${post._id}`}>
                    <Posts
                      title={`${post.title.substring(0, 20)}...`}
                      imageUrl={post.imageUrl}
                      description={`${post.description.substring(0, 20)}...`}
                    />
                  </Link>
                );
              })
            : posts.map((post) => {
                return (
                  <Link key={post._id} to={`/view/${post._id}`}>
                    <Skeleton />
                  </Link>
                );
              })}
        </main>
      </div>
    </div>
  );
}

export default View;
