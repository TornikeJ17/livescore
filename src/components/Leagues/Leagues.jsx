import React from "react";
import { Container, Title, Block, IMG, LeagueName, Select } from "./Styled";
import Leagues from "../api/leagues";
const League = ({ setData, setTitle, setCountry }) => {
  return (
    <Container>
      <Title>LEAGUES</Title>
      {Leagues.map((item, index) => (
        <Block key={index} onClick={() => setCountry(item.id)}>
          <IMG src={item.image} />
          <LeagueName>{item.name}</LeagueName>
        </Block>
      ))}
    </Container>
  );
};

export default League;
