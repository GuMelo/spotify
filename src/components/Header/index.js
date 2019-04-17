import React from "react";
import { Container, Search, User } from "./styles.js";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars2.githubusercontent.com/u/2254731?v=4"
        alt="avatar"
      />
      Gustavo Melo
    </User>
  </Container>
);

export default Header;
