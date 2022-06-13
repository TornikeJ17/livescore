import React from "react";
import { Container, Title, IMG, Block, Season, Select } from "./Styled";
import Leagues from "../api/leagues";
const LeagueTitle = ({ data, title, setCountry, setYear, year }) => {
  return (
    <Container>
      <Block>
        <IMG src={title?.data?.logos?.light} />
      </Block>
      <Title>{data?.data?.name}</Title>
      <Season onClick={(e) => setYear(e.target.value)} defaultValue={year}>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2022">2022</option>
        <option value="2011">2011</option>
      </Season>
      <Select onClick={(e) => setCountry(e.target.value)}>
        {Leagues.map((item, index) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </Select>
    </Container>
  );
};
export default LeagueTitle;
