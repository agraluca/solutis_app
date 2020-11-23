import React from "react";

import Header from "../../components/Header/Index";
import error404 from "../../img/404.svg";

import "./notFound.css";

function NotFound() {
  return (
    <>
      <Header />
      <main id="page-not-found">
        <h1>Oops... Não conseguimos encontrar o endereço solicitado. </h1>
        <img
          src={error404}
          alt="Desenho de erro 404 com pessoa sentada no número zero"
        />
      </main>
    </>
  );
}

export default NotFound;
