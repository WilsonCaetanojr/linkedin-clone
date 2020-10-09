import React from "react";

import Panel from "../../Panel";

import { Container } from "./styles";

const TrendingPanel = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Artificial intelligence</span>
              <span className="subtext">há 3 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">FaceBook ReactJS</span>
              <span className="subtext">há 8 d • 122 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">NodeJS</span>
              <span className="subtext">há 12 d • 98 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">React Native</span>
              <span className="subtext">há 3 d • 17 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Java Script</span>
              <span className="subtext">há 1 d • 76 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Design Patterns</span>
              <span className="subtext">há 9 d • 88 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
