import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Index";
import Posts from "../../components/Posts/Index";
import api from "../../services/api";
import Skeleton from "../../components/Skeleton/Index";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";

import { withRouter } from "react-router-dom";

import "./single.css";

interface SinglePost {
  title: string;
  description: string;
  imageUrl: string;
}

interface PostParams {
  id: string;
}

function ViewSingle(props: any) {
  const [singlePost, setSinglePost] = useState<SinglePost>();
  const params = useParams<PostParams>();

  useEffect(() => {
    async function getSinglePost() {
      const res = await api.get(`/view/${params.id}`);
      setSinglePost(res.data);

      console.log(res.data._id);
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

  function handleDelete() {
    api.delete(`/view/${params.id}`);
    props.history.push("/");
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
        <section className="edit-delete">
          <Link to={`/view/${params.id}/edit`}>
            <RiEdit2Line />
          </Link>
          <button onClick={handleDelete}>
            <RiDeleteBin5Fill />
          </button>
        </section>
      </div>
    </div>
  );
}

export default withRouter(ViewSingle);
