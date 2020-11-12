import React, { useState, FormEvent } from "react";
import Header from "../../components/Header/Index";
import api from "../../services/api";

import "./create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    api.post("/upload", {
      title,
      description,
      imageUrl: url,
    });
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
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Create;
