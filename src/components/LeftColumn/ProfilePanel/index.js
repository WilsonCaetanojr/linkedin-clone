import React from "react";

import Panel from "../../Panel";

import { Container } from "./styles";

const ProfilePanel = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/WilsonCaetanojr.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Wilson Caetano</h1>
        <h2>Developer Full Stack @ FakeCompany</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
