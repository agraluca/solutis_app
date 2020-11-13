import React, { useState, FormEvent } from "react";
import Header from "../../components/Header/Index";
import api from "../../services/api";
import { RiUnsplashFill } from "react-icons/ri";
import { withRouter } from "react-router-dom";

import "./create.css";

function Create(props: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await api.post("/upload", {
      title,
      description,
      imageUrl: url,
    });
    props.history.push(`/view/${res.data._id}`);
  }

  return (
    <div id="create-page">
      <Header />

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Preencha os campos abaixo</legend>
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
          <section className="unsplash-icon">
            <a rel="noopener norefer" href="https://unsplash.com/">
              <RiUnsplashFill />
              <h6>Procure por imagens nesse site e cole a url logo acima.</h6>
            </a>
          </section>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default withRouter(Create);
