import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Posts from "../../components/Posts/Index";
import Header from "../../components/Header/Index";
import Skeleton from "../../components/Skeleton/Index";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./view.css";

import { RootState } from "../../store";

function View() {
  const posts = useSelector((state: RootState) => state.postsReducer.posts);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getPosts() {
      const res = await api.get("/view");
      dispatch({ type: "GET_POST", payload: res.data.reverse() });
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
          {!isLoading &&
            posts.map((post: any) => {
              return (
                <Link key={post._id} to={`/view/${post._id}`}>
                  <Posts
                    title={`${post.title.substring(0, 10)}...`}
                    imageUrl={post.imageUrl}
                    description={`${post.description.substring(0, 20)}...`}
                  />
                </Link>
              );
            })}
        </main>
      </div>
    </div>
  );
}

export default View;
