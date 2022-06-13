import React from "react";
import {
  Container,
  HrElement,
  BlockOne,
  BlockTwo,
  Team,
  PTS,
  LittleBlock,
  IMG,
} from "./Styled";

const LeagueStandings = ({ data }) => {
  return (
    <Container>
      <BlockOne>
        <LittleBlock>#</LittleBlock>
        <Team>TEAM</Team>
        <LittleBlock>MP</LittleBlock>
        <LittleBlock>W</LittleBlock>
        <LittleBlock>D</LittleBlock>
        <LittleBlock>L</LittleBlock>
        <LittleBlock>G</LittleBlock>
        <PTS>PTS</PTS>
      </BlockOne>
      <HrElement />
      <div>
        {data?.data?.standings?.map((item, index) => (
          <div key={index}>
            <BlockTwo>
              <LittleBlock>{item.stats[8].value}.</LittleBlock>
              <Team>
                <IMG src={item.team.logos[0].href} />
                {item.team.name}
              </Team>
              <LittleBlock>{item.stats[3].value}</LittleBlock>
              <LittleBlock>{item.stats[0].value}</LittleBlock>
              <LittleBlock>{item.stats[2].value}</LittleBlock>
              <LittleBlock>{item.stats[1].value}</LittleBlock>
              <LittleBlock>
                {item.stats[4].value} : {item.stats[5].value}
              </LittleBlock>
              <PTS>{item.stats[6].value}</PTS>
            </BlockTwo>
            <HrElement />
          </div>
        ))}
      </div>
    </Container>
  );
};
export default LeagueStandings;
