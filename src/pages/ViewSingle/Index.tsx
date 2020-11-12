import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Index";
import Posts from "../../components/Posts/Index";
import api from "../../services/api";
import Skeleton from "../../components/Skeleton/Index";

import "./single.css";

interface SinglePost {
  title: string;
  description: string;
  imageUrl: string;
}

interface PostParams {
  id: string;
}

function ViewSingle() {
  const [singlePost, setSinglePost] = useState<SinglePost>();
  const params = useParams<PostParams>();

  useEffect(() => {
    async function getSinglePost() {
      const res = await api.get(`/view/${params.id}`);
      setSinglePost(res.data);
      console.log(res.data);
    }
    getSinglePost();
  }, [params.id]);

  if (!singlePost) {
    return (
      <>
        <Header />
        <Skeleton />
      </>
    );
  }

  return (
    <div id="single-wrapper">
      <Header />
      <div className="single-post">
        <Posts
          title={singlePost.title}
          imageUrl={singlePost.imageUrl}
          description={singlePost.description}
        />
      </div>
    </div>
  );
}

export default ViewSingle;
