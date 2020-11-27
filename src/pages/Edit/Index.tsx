import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Index";
import api from "../../services/api";
import { useParams, withRouter } from "react-router-dom";

import "./edit.css";

interface EditParams {
  id: string;
}

function Edit(props: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const params = useParams<EditParams>();

  useEffect(() => {
    async function getSinglePostEdit() {
      const res = await api.get(`/view/${params.id}`);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setUrl(res.data.imageUrl);
    }
    getSinglePostEdit();
  }, [params.id]);

  function handleUpdate() {
    api.put(`/view/${params.id}`, {
      title,
      description,
      imageUrl: url,
    });
    props.history.push("/view");
  }

  return (
    <div id="edit-page">
      <Header />

      <form onSubmit={handleUpdate}>
        <fieldset>
          <legend>Edite os campos abaixo</legend>
          <div className="input-block">
            <label htmlFor="title">Nome</label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              maxLength={300}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="url">Url da imagem</label>
            <input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </fieldset>
        <button type="submit">Alterar mudanças</button>
      </form>
    </div>
  );
}

export default withRouter(Edit);
