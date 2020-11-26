import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Posts from "../../components/Posts/Index";
import Header from "../../components/Header/Index";
import Skeleton from "../../components/Skeleton/Index";
import { Link } from "react-router-dom";
import { newPost } from "../../action/postAction";

import "./view.css";

import { RootState } from "../../store";
import { Post } from "../../store/posts";

function View() {
  const posts = useSelector((state: RootState) => state.postsReducer.posts);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getPosts() {
      dispatch(newPost());
      setIsLoading(false);
    }
    getPosts();
  }, [dispatch]);

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
          {!isLoading ? (
            posts.map((post: Post) => {
              return (
                <Link key={post._id} to={`/view/${post._id}`}>
                  <Posts
                    title={`${post.title.substring(0, 10)}...`}
                    imageUrl={post.imageUrl}
                    description={`${post.description.substring(0, 20)}...`}
                  />
                </Link>
              );
            })
          ) : (
            <>
              <Header />
              <Skeleton />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default View;
