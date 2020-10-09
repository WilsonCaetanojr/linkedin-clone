import React from "react";

import { Container } from "./styles";
import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";
import MiddleColumn from "../MiddleColumn";

const Layout = () => {
  return (
    <Container className="left-column">
      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;
