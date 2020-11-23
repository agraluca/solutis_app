import React from "react";

import logoLanding from "../../img/landing.svg";
import Logo from "../../components/Logo/Index";

import { FiCornerDownRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./landing.css";

function Landing() {
  return (
    <main id="page-landing">
      <div className="wrapper">
        <section>
          <Logo />
          <p>
            Um local para escrever o que quiser, do jeito que quiser, na hora
            que quiser!
          </p>
          <div className="enter-view">
            <Link to="/view" className="enter-view">
              <FiCornerDownRight />
            </Link>
          </div>
        </section>
        <img
          src={logoLanding}
          alt="A woman sitted in the top, close to the clouds. And below her there is a blue tone forest.  "
        />
      </div>
    </main>
  );
}

export default Landing;
