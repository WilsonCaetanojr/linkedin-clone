import React from "react";

import Panel from "../../Panel";

import { Container, HashtagIcon } from "./styles";

const tags = ["developer", "full-stack", "react", "node"];

const HashtagPanel = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Hashtags seguidas</span>

        {tags.map(item => (
          <span className="tag">
            <HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </Container>
  );
};

export default HashtagPanel;
