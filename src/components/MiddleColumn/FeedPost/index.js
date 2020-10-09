import React from "react";

import Panel from "../../Panel";

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon
} from "./styles";

const FeedPost = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="logo.png" alt="FakeCompany" />
          <Column>
            <h3>FakeCompany</h3>
            <h4>System developer</h4>
            <time>2 sem</time>
          </Column>
        </Row>

        <PostImage src="feed.jpg" alt="FakeCompany Blog" />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">23</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
