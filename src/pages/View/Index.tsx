import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Posts from "../../components/Posts/Index";
import Header from "../../components/Header/Index";
import Skeleton from "../../components/Skeleton/Index";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./view.css";
import { PostsState, Post } from "../../store/posts";


interface PostsView {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  posts: Post
}

function View() {
  // const {data} = useSelector<PostsState | PostsState["posts"]>(
  //   (state) => state.posts
  // );
  const data: Post[] = useSelector<PostsStates, Array<Post>>((state) => state.posts);
  const [isLoading, setIsLoading] = useState(true);
  const [posts1, setPosts1] = useState<PostsView[]>([]);

  useEffect(() => {
    async function getPosts() {
      const res = await api.get("/view");
      console.log(res.data);
      setPosts1(res.data.reverse());
      setIsLoading(false);
    }
    getPosts();
  }, []);

  console.log(data.posts.posts)

  if (isLoading) {
    return (
      <>
        <Header />
        <Skeleton />
      </>
    );
  }
  // return (
  //   <div>
  //     {JSON.stringify( data.posts)}
  //   </div>
  // )
  return (

    <div id="page-post">
      <div className="view-wrapper">
        <Header />

        <main className="grid-template">
          {!isLoading &&
            data.map((post:any) => {
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
